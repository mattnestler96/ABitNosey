import React from 'react';
import { Place } from '@aws-amplify/geo';
import { Marker, MarkerProps, Popup } from 'react-map-gl';
import { Heading, Text } from '@aws-amplify/ui-react';

const MarkerWithPlace = (props: MarkerProps & Place): JSX.Element => {
    const { postalCode } = props;
    React.useEffect(() => setShowPopup(true), [postalCode])
    const [showPopup, setShowPopup] = React.useState(true);
    const handleMarkerClick = ({ originalEvent }: mapboxgl.MapboxEvent<MouseEvent>) => {
        originalEvent.stopPropagation();
        setShowPopup(!showPopup);
    };
    return (
        <>
            <Marker
                {...props}
                latitude={props.latitude}
                longitude={props.longitude}
                onClick={handleMarkerClick}
            />
            {showPopup &&
                <Popup
                    latitude={props.latitude}
                    longitude={props.longitude}
                    offset={{ bottom: [0, -40] }}
                    onClose={() => setShowPopup(false)}
                >
                    <Heading>{props.neighborhood} {props.municipality}</Heading>
                    <Text>{props.postalCode}</Text>
                    <Text>{props.label}</Text>
                </Popup>
            }
            
        </>
    )
}

export default MarkerWithPlace;