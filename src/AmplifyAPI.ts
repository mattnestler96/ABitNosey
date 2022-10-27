/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateZORIInput = {
  id?: string | null,
  RegionName?: string | null,
  City?: string | null,
  State?: string | null,
  Metro?: string | null,
  SizeRank?: string | null,
  Value?: string | null,
  CountyName?: string | null,
  _version?: number | null,
};

export type ModelZORIConditionInput = {
  RegionName?: ModelStringInput | null,
  City?: ModelStringInput | null,
  State?: ModelStringInput | null,
  Metro?: ModelStringInput | null,
  SizeRank?: ModelStringInput | null,
  Value?: ModelStringInput | null,
  CountyName?: ModelStringInput | null,
  and?: Array< ModelZORIConditionInput | null > | null,
  or?: Array< ModelZORIConditionInput | null > | null,
  not?: ModelZORIConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ZORI = {
  __typename: "ZORI",
  id: string,
  RegionName?: string | null,
  City?: string | null,
  State?: string | null,
  Metro?: string | null,
  SizeRank?: string | null,
  Value?: string | null,
  CountyName?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateZORIInput = {
  id: string,
  RegionName?: string | null,
  City?: string | null,
  State?: string | null,
  Metro?: string | null,
  SizeRank?: string | null,
  Value?: string | null,
  CountyName?: string | null,
  _version?: number | null,
};

export type DeleteZORIInput = {
  id: string,
  _version?: number | null,
};

export type CreateZHVIInput = {
  id?: string | null,
  RegionName?: string | null,
  City?: string | null,
  State?: string | null,
  Metro?: string | null,
  SizeRank?: number | null,
  Value?: number | null,
  CountyName?: string | null,
  _version?: number | null,
};

export type ModelZHVIConditionInput = {
  RegionName?: ModelStringInput | null,
  City?: ModelStringInput | null,
  State?: ModelStringInput | null,
  Metro?: ModelStringInput | null,
  SizeRank?: ModelIntInput | null,
  Value?: ModelFloatInput | null,
  CountyName?: ModelStringInput | null,
  and?: Array< ModelZHVIConditionInput | null > | null,
  or?: Array< ModelZHVIConditionInput | null > | null,
  not?: ModelZHVIConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ZHVI = {
  __typename: "ZHVI",
  id: string,
  RegionName?: string | null,
  City?: string | null,
  State?: string | null,
  Metro?: string | null,
  SizeRank?: number | null,
  Value?: number | null,
  CountyName?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateZHVIInput = {
  id: string,
  RegionName?: string | null,
  City?: string | null,
  State?: string | null,
  Metro?: string | null,
  SizeRank?: number | null,
  Value?: number | null,
  CountyName?: string | null,
  _version?: number | null,
};

export type DeleteZHVIInput = {
  id: string,
  _version?: number | null,
};

export type ModelZORIFilterInput = {
  id?: ModelIDInput | null,
  RegionName?: ModelStringInput | null,
  City?: ModelStringInput | null,
  State?: ModelStringInput | null,
  Metro?: ModelStringInput | null,
  SizeRank?: ModelStringInput | null,
  Value?: ModelStringInput | null,
  CountyName?: ModelStringInput | null,
  and?: Array< ModelZORIFilterInput | null > | null,
  or?: Array< ModelZORIFilterInput | null > | null,
  not?: ModelZORIFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelZORIConnection = {
  __typename: "ModelZORIConnection",
  items:  Array<ZORI | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelZHVIFilterInput = {
  id?: ModelIDInput | null,
  RegionName?: ModelStringInput | null,
  City?: ModelStringInput | null,
  State?: ModelStringInput | null,
  Metro?: ModelStringInput | null,
  SizeRank?: ModelIntInput | null,
  Value?: ModelFloatInput | null,
  CountyName?: ModelStringInput | null,
  and?: Array< ModelZHVIFilterInput | null > | null,
  or?: Array< ModelZHVIFilterInput | null > | null,
  not?: ModelZHVIFilterInput | null,
};

export type ModelZHVIConnection = {
  __typename: "ModelZHVIConnection",
  items:  Array<ZHVI | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionZORIFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  RegionName?: ModelSubscriptionStringInput | null,
  City?: ModelSubscriptionStringInput | null,
  State?: ModelSubscriptionStringInput | null,
  Metro?: ModelSubscriptionStringInput | null,
  SizeRank?: ModelSubscriptionStringInput | null,
  Value?: ModelSubscriptionStringInput | null,
  CountyName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionZORIFilterInput | null > | null,
  or?: Array< ModelSubscriptionZORIFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionZHVIFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  RegionName?: ModelSubscriptionStringInput | null,
  City?: ModelSubscriptionStringInput | null,
  State?: ModelSubscriptionStringInput | null,
  Metro?: ModelSubscriptionStringInput | null,
  SizeRank?: ModelSubscriptionIntInput | null,
  Value?: ModelSubscriptionFloatInput | null,
  CountyName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionZHVIFilterInput | null > | null,
  or?: Array< ModelSubscriptionZHVIFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateZORIMutationVariables = {
  input: CreateZORIInput,
  condition?: ModelZORIConditionInput | null,
};

export type CreateZORIMutation = {
  createZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateZORIMutationVariables = {
  input: UpdateZORIInput,
  condition?: ModelZORIConditionInput | null,
};

export type UpdateZORIMutation = {
  updateZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteZORIMutationVariables = {
  input: DeleteZORIInput,
  condition?: ModelZORIConditionInput | null,
};

export type DeleteZORIMutation = {
  deleteZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateZHVIMutationVariables = {
  input: CreateZHVIInput,
  condition?: ModelZHVIConditionInput | null,
};

export type CreateZHVIMutation = {
  createZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateZHVIMutationVariables = {
  input: UpdateZHVIInput,
  condition?: ModelZHVIConditionInput | null,
};

export type UpdateZHVIMutation = {
  updateZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteZHVIMutationVariables = {
  input: DeleteZHVIInput,
  condition?: ModelZHVIConditionInput | null,
};

export type DeleteZHVIMutation = {
  deleteZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetZORIQueryVariables = {
  id: string,
};

export type GetZORIQuery = {
  getZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListZORISQueryVariables = {
  filter?: ModelZORIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListZORISQuery = {
  listZORIS?:  {
    __typename: "ModelZORIConnection",
    items:  Array< {
      __typename: "ZORI",
      id: string,
      RegionName?: string | null,
      City?: string | null,
      State?: string | null,
      Metro?: string | null,
      SizeRank?: string | null,
      Value?: string | null,
      CountyName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncZORISQueryVariables = {
  filter?: ModelZORIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncZORISQuery = {
  syncZORIS?:  {
    __typename: "ModelZORIConnection",
    items:  Array< {
      __typename: "ZORI",
      id: string,
      RegionName?: string | null,
      City?: string | null,
      State?: string | null,
      Metro?: string | null,
      SizeRank?: string | null,
      Value?: string | null,
      CountyName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ZORIByRegionNameQueryVariables = {
  RegionName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelZORIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ZORIByRegionNameQuery = {
  ZORIByRegionName?:  {
    __typename: "ModelZORIConnection",
    items:  Array< {
      __typename: "ZORI",
      id: string,
      RegionName?: string | null,
      City?: string | null,
      State?: string | null,
      Metro?: string | null,
      SizeRank?: string | null,
      Value?: string | null,
      CountyName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetZHVIQueryVariables = {
  id: string,
};

export type GetZHVIQuery = {
  getZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListZHVISQueryVariables = {
  filter?: ModelZHVIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListZHVISQuery = {
  listZHVIS?:  {
    __typename: "ModelZHVIConnection",
    items:  Array< {
      __typename: "ZHVI",
      id: string,
      RegionName?: string | null,
      City?: string | null,
      State?: string | null,
      Metro?: string | null,
      SizeRank?: number | null,
      Value?: number | null,
      CountyName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncZHVISQueryVariables = {
  filter?: ModelZHVIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncZHVISQuery = {
  syncZHVIS?:  {
    __typename: "ModelZHVIConnection",
    items:  Array< {
      __typename: "ZHVI",
      id: string,
      RegionName?: string | null,
      City?: string | null,
      State?: string | null,
      Metro?: string | null,
      SizeRank?: number | null,
      Value?: number | null,
      CountyName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ZHVIByRegionNameQueryVariables = {
  RegionName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelZHVIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ZHVIByRegionNameQuery = {
  ZHVIByRegionName?:  {
    __typename: "ModelZHVIConnection",
    items:  Array< {
      __typename: "ZHVI",
      id: string,
      RegionName?: string | null,
      City?: string | null,
      State?: string | null,
      Metro?: string | null,
      SizeRank?: number | null,
      Value?: number | null,
      CountyName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateZORISubscriptionVariables = {
  filter?: ModelSubscriptionZORIFilterInput | null,
};

export type OnCreateZORISubscription = {
  onCreateZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateZORISubscriptionVariables = {
  filter?: ModelSubscriptionZORIFilterInput | null,
};

export type OnUpdateZORISubscription = {
  onUpdateZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteZORISubscriptionVariables = {
  filter?: ModelSubscriptionZORIFilterInput | null,
};

export type OnDeleteZORISubscription = {
  onDeleteZORI?:  {
    __typename: "ZORI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: string | null,
    Value?: string | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateZHVISubscriptionVariables = {
  filter?: ModelSubscriptionZHVIFilterInput | null,
};

export type OnCreateZHVISubscription = {
  onCreateZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateZHVISubscriptionVariables = {
  filter?: ModelSubscriptionZHVIFilterInput | null,
};

export type OnUpdateZHVISubscription = {
  onUpdateZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteZHVISubscriptionVariables = {
  filter?: ModelSubscriptionZHVIFilterInput | null,
};

export type OnDeleteZHVISubscription = {
  onDeleteZHVI?:  {
    __typename: "ZHVI",
    id: string,
    RegionName?: string | null,
    City?: string | null,
    State?: string | null,
    Metro?: string | null,
    SizeRank?: number | null,
    Value?: number | null,
    CountyName?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
