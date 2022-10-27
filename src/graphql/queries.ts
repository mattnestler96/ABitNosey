/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getZORI = /* GraphQL */ `
  query GetZORI($id: ID!) {
    getZORI(id: $id) {
      id
      RegionName
      City
      State
      Metro
      SizeRank
      Value
      CountyName
    }
  }
`;
export const listZORIS = /* GraphQL */ `
  query ListZORIS(
    $filter: ModelZORIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZORIS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        RegionName
        City
        State
        Metro
        SizeRank
        Value
        CountyName
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZORIS = /* GraphQL */ `
  query SyncZORIS(
    $filter: ModelZORIFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZORIS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        RegionName
        City
        State
        Metro
        SizeRank
        Value
        CountyName
      }
      nextToken
      startedAt
    }
  }
`;
export const zORIByRegionName = /* GraphQL */ `
  query ZORIByRegionName(
    $RegionName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelZORIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ZORIByRegionName(
      RegionName: $RegionName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        RegionName
        City
        State
        Metro
        SizeRank
        Value
        CountyName
      }
      nextToken
      startedAt
    }
  }
`;
export const getZHVI = /* GraphQL */ `
  query GetZHVI($id: ID!) {
    getZHVI(id: $id) {
      id
      RegionName
      City
      State
      Metro
      SizeRank
      Value
      CountyName
    }
  }
`;
export const listZHVIS = /* GraphQL */ `
  query ListZHVIS(
    $filter: ModelZHVIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZHVIS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        RegionName
        City
        State
        Metro
        SizeRank
        Value
        CountyName
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZHVIS = /* GraphQL */ `
  query SyncZHVIS(
    $filter: ModelZHVIFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZHVIS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        RegionName
        City
        State
        Metro
        SizeRank
        Value
        CountyName
      }
      nextToken
      startedAt
    }
  }
`;
export const zHVIByRegionName = /* GraphQL */ `
  query ZHVIByRegionName(
    $RegionName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelZHVIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ZHVIByRegionName(
      RegionName: $RegionName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        RegionName
        City
        State
        Metro
        SizeRank
        Value
        CountyName
      }
      nextToken
      startedAt
    }
  }
`;
