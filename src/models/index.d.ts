import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ZORIMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ZHVIMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerZORI = {
  readonly id: string;
  readonly RegionName?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Metro?: string | null;
  readonly SizeRank?: string | null;
  readonly Value?: string | null;
  readonly CountyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyZORI = {
  readonly id: string;
  readonly RegionName?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Metro?: string | null;
  readonly SizeRank?: string | null;
  readonly Value?: string | null;
  readonly CountyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ZORI = LazyLoading extends LazyLoadingDisabled ? EagerZORI : LazyZORI

export declare const ZORI: (new (init: ModelInit<ZORI, ZORIMetaData>) => ZORI) & {
  copyOf(source: ZORI, mutator: (draft: MutableModel<ZORI, ZORIMetaData>) => MutableModel<ZORI, ZORIMetaData> | void): ZORI;
}

type EagerZHVI = {
  readonly id: string;
  readonly RegionName?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Metro?: string | null;
  readonly SizeRank?: number | null;
  readonly Value?: number | null;
  readonly CountyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyZHVI = {
  readonly id: string;
  readonly RegionName?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Metro?: string | null;
  readonly SizeRank?: number | null;
  readonly Value?: number | null;
  readonly CountyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ZHVI = LazyLoading extends LazyLoadingDisabled ? EagerZHVI : LazyZHVI

export declare const ZHVI: (new (init: ModelInit<ZHVI, ZHVIMetaData>) => ZHVI) & {
  copyOf(source: ZHVI, mutator: (draft: MutableModel<ZHVI, ZHVIMetaData>) => MutableModel<ZHVI, ZHVIMetaData> | void): ZHVI;
}