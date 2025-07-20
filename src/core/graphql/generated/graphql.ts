import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export const GetHotelsDocument = gql`
    query GetHotels {
  hotels {
    id
    name
    city
    address
    starRating
    userRating
    reviewCount
    description
    amenities
    images
    isCompetitor
    url
    dailyPrices {
      id
      date
      price
      currency
      availability
      roomCategoryId
      scrapedAt
    }
    roomCategories {
      id
      name
      description
    }
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetHotelsGQL extends Apollo.Query<GetHotelsQuery, GetHotelsQueryVariables> {
    document = GetHotelsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export type GetHotelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHotelsQuery = { __typename?: 'Query', hotels: Array<{ __typename?: 'Hotel', id: number, name: string, city: string, address?: string | null, starRating?: number | null, userRating?: number | null, reviewCount?: number | null, description?: string | null, amenities?: Array<string> | null, images?: Array<string> | null, isCompetitor: boolean, url: string, createdAt: any, updatedAt: any, dailyPrices?: Array<{ __typename?: 'DailyPrice', id: number, date: any, price: number, currency: string, availability: boolean, roomCategoryId?: number | null, scrapedAt: any }> | null, roomCategories?: Array<{ __typename?: 'RoomCategory', id: number, name: string, description?: string | null }> | null }> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BatchScrapingResult = {
  __typename?: 'BatchScrapingResult';
  message: Scalars['String']['output'];
  results: Array<BatchScrapingResultItem>;
  stored: Scalars['Int']['output'];
};

export type BatchScrapingResultItem = {
  __typename?: 'BatchScrapingResultItem';
  data?: Maybe<Scalars['JSON']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  hotelId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type DailyPrice = {
  __typename?: 'DailyPrice';
  availability: Scalars['Boolean']['output'];
  currency: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  hotelId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  roomCategory?: Maybe<Scalars['String']['output']>;
  roomCategoryId?: Maybe<Scalars['Int']['output']>;
  scrapedAt: Scalars['DateTime']['output'];
};

export type DashboardStat = {
  __typename?: 'DashboardStat';
  color: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  title: Scalars['String']['output'];
  trend?: Maybe<Trend>;
  value: Scalars['String']['output'];
};

export type Hotel = {
  __typename?: 'Hotel';
  address?: Maybe<Scalars['String']['output']>;
  amenities?: Maybe<Array<Scalars['String']['output']>>;
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dailyPrices?: Maybe<Array<DailyPrice>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  isCompetitor: Scalars['Boolean']['output'];
  latestPrice?: Maybe<DailyPrice>;
  latestPriceAtDate?: Maybe<DailyPrice>;
  name: Scalars['String']['output'];
  previousPrice?: Maybe<DailyPrice>;
  previousPriceAtDate?: Maybe<DailyPrice>;
  reviewCount?: Maybe<Scalars['Int']['output']>;
  roomCategories?: Maybe<Array<RoomCategory>>;
  starRating?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userRating?: Maybe<Scalars['Float']['output']>;
};


export type HotelLatestPriceAtDateArgs = {
  date: Scalars['String']['input'];
};


export type HotelPreviousPriceAtDateArgs = {
  date: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHotel: Hotel;
  deleteHotel: Hotel;
  scrapeAndStoreBatch: BatchScrapingResult;
  updateHotel: Hotel;
};


export type MutationCreateHotelArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  amenities?: InputMaybe<Array<Scalars['String']['input']>>;
  city: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isCompetitor?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  reviewCount?: InputMaybe<Scalars['Int']['input']>;
  starRating?: InputMaybe<Scalars['Float']['input']>;
  url: Scalars['String']['input'];
  userRating?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationDeleteHotelArgs = {
  id: Scalars['Int']['input'];
};


export type MutationScrapeAndStoreBatchArgs = {
  hotelIds: Array<Scalars['Int']['input']>;
};


export type MutationUpdateHotelArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  amenities?: InputMaybe<Array<Scalars['String']['input']>>;
  city?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isCompetitor?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviewCount?: InputMaybe<Scalars['Int']['input']>;
  starRating?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userRating?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  dashboardStats: Array<DashboardStat>;
  hotel?: Maybe<Hotel>;
  hotels: Array<Hotel>;
  hotelsWithAllDailyPricesByDate: Array<Hotel>;
  hotelsWithPricesBetweenDates: Array<Hotel>;
  hotelsWithPricesByDate: Array<Hotel>;
};


export type QueryHotelArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHotelsWithAllDailyPricesByDateArgs = {
  date: Scalars['String']['input'];
};


export type QueryHotelsWithPricesBetweenDatesArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};


export type QueryHotelsWithPricesByDateArgs = {
  date: Scalars['String']['input'];
};

export type RoomCategory = {
  __typename?: 'RoomCategory';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hotelId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Trend = {
  __typename?: 'Trend';
  isPositive: Scalars['Boolean']['output'];
  value: Scalars['Float']['output'];
};
