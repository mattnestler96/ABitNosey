import React from 'react';
import { findIncomeByZip, findHomeValueByZip, findRentValueByZip, findDemoDataByZip, ZillowResponse } from './api'
import { Amplify, Geo } from 'aws-amplify';
import { Place } from '@aws-amplify/geo'
import awsconfig from './aws-exports';
import { Authenticator, MapView, LocationSearch } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { ViewState } from 'react-map-gl';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { omit } from 'lodash'

ChartJS.register(ArcElement, Tooltip)
Amplify.configure(awsconfig);

const currency = (value: number | string): string => {
  let num = value
  if (typeof value === 'string') {
    num = parseFloat(value)
  }
  return `$${(Math.round((num as number) * 100) / 100).toLocaleString()}`
}

function App() {

  const [initialViewState, setInitialViewState] = React.useState<Partial<ViewState> | undefined>()
  const getInitialLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const {latitude, longitude} = position.coords
      const viewState = {latitude, longitude, zoom: 9} as ViewState
      setInitialViewState(viewState)
      handleMove({ viewState })
    },
    () => setInitialViewState({}));
  }
  React.useEffect(getInitialLocation, [])

  const [currentLocation, setCurrentLocation] = React.useState<Place | undefined>()
  const [incomeData, setIncomeData] = React.useState<string | undefined>()
  const [rentData, setRentData] = React.useState<ZillowResponse | undefined>();
  const [homeData, setHomeData] = React.useState<ZillowResponse | undefined>();
  const [demoData, setDemoData] = React.useState<any | undefined>();
  const findZip = () => {
    const zip = currentLocation?.postalCode?.substring(0,5) || ''
    if (zip) {
      findIncomeByZip(`${zip}`).then(setIncomeData)
      findHomeValueByZip(`${zip}`).then(setHomeData)
      findRentValueByZip(`${zip}`).then(setRentData)
      findDemoDataByZip(`${zip}`).then(setDemoData)
    }
  }
  React.useEffect(findZip, [currentLocation])

  const handleMove = ({viewState}: { viewState: ViewState }): void => {
    const { latitude, longitude } = viewState
    Geo.searchByCoordinates([longitude, latitude], {maxResults: 1}).then(setCurrentLocation)
  }

  return (
    <Authenticator>
      <div className="App">
        <header className="App-header">
          {currentLocation && (
            <>
              <h1>{currentLocation.neighborhood} {currentLocation.municipality}</h1>
              <h2>{currentLocation.postalCode}</h2>
              <h5>{currentLocation.label}</h5>
            </>
          )}
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{ margin: 10 }}>
              {incomeData && <p>Average Household Income {currency(incomeData)}</p>}
              {homeData && <p>Average Home Value {currency(homeData.Value)}</p>}
              {rentData && <p>Average Rent {currency(rentData.Value)}</p>}
            </div>
            <div style={{ margin: 10 }}>
              {demoData && (
                <>
                  <p>Total Population {demoData.totalPopulation.toLocaleString()}</p>
                  <Doughnut
                    options={{
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                    data={{
                      labels: Object.keys(omit(demoData, ['totalPopulation', 'nonHispanicTotalPopulation', 'hispanicTotalPopulation'])),
                      datasets: [{
                        data: Object.values(omit(demoData, ['totalPopulation', 'nonHispanicTotalPopulation', 'hispanicTotalPopulation'])),
                      }]
                    }}
                  />
                </>
              )}
            </div>
          </div>
          {initialViewState && 
            <MapView
              reuseMaps={true}
              initialViewState={initialViewState}
              maxZoom={13}
              onMoveEnd={handleMove}
            >
              <LocationSearch />
            </MapView>
          }
        </header>
      </div>
    </Authenticator>
  );
}

export default App;
