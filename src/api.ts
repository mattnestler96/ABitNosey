import axios from "axios"
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

const CENSUS_KEY = '727424fca32c84b8882d75dedbe61c6d0f9df1bf'
// const ZILLOW_KEY = 'UdSgy4dpzQx2AHX1RJjybYIxbN38FAbm6ThvZRQG'

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
    // api.census.gov/data/2020/acs/acs5?get=NAME,group(B01001)&for=us:1&key=YOUR_KEY_GOES_HERE
    const {data} = await axios.get(`https://api.census.gov/data/2020/acs/acs5?get=NAME,group(B19013)&for=zip%20code%20tabulation%20area:${zip}&key=${CENSUS_KEY}`)
    const [rawKeys, rawData] = data
    return rawData[rawKeys.findIndex((d: string) => d === 'B19013_001E')]
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