import axios from "axios"
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

const CENSUS_KEY = process.env.REACT_APP_CENSUS_KEY

export type ZillowResponse = {
    RegionName: string;
    Value: number;
    State: string;
    CountyName: string;
    City: string;
    SizeRank: number;
    Metro: string;
}

export const findIncomeByZip = async (zip: string): Promise<any> => {
    const {data} = await axios.get(`https://api.census.gov/data/2020/acs/acs5?get=B19013_001E&for=zip%20code%20tabulation%20area:${zip}&key=${CENSUS_KEY}`)
    const [rawKeys, rawData] = data
    return rawData[0]
}

const demoDataKeys: Record<string, string> = {
    'B01001_001E': 'totalPopulation',
    'B01001A_001E': 'whiteTotalPopulation',
    'B01001B_001E': 'blackTotalPopulation',
    'B01001C_001E': 'nativeTotalPopulation',
    'B01001E_001E': 'islanderTotalPopulation',
    'B01001F_001E': 'otherTotalPopulation',
    'B01001H_001E': 'nonHispanicTotalPopulation',
    'B01001I_001E': 'hispanicTotalPopulation'
}
export const findDemoDataByZip = async (zip: string): Promise<any> => {
    const lookupKeys = Object.keys(demoDataKeys)
    const {data} = await axios.get(`https://api.census.gov/data/2020/acs/acs5?get=NAME,${lookupKeys}&for=zip%20code%20tabulation%20area:${zip}&key=${CENSUS_KEY}`)
    const [rawKeys, rawData] = data
    const entries = rawKeys
                        .map((v: string, k: string) => ([demoDataKeys[v] || 'OUT', rawData[k]]))
                        .filter(([key]: string[]) => key !== 'OUT')
    return Object.fromEntries(entries)
}

export const findHomeValueByZip = async (zip: string): Promise<ZillowResponse> => {
    const data = await API.graphql({
        query: queries.zHVIByRegionName,
        variables: { RegionName: zip }
    }) as any;
    return data.data.ZHVIByRegionName.items[0]
}

export const findRentValueByZip = async (zip: string): Promise<ZillowResponse> => {
    const data = await API.graphql({
        query: queries.zORIByRegionName,
        variables: { RegionName: zip }
    }) as any;
    return data.data.ZORIByRegionName.items[0]
}