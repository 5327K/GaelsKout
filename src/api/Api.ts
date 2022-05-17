/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Event {
  /** @format int32 */
  id: number;
  sku: string;
  name: string;

  /** @format date-time */
  start?: string;

  /** @format date-time */
  end?: string;
  season: IdInfo;
  program: IdInfo;
  location: Location;
  divisions?: Division[];
  level?: EventLevel;
  ongoing?: boolean;
  awards_finalized?: boolean;
  event_type?: EventType;
}

export enum EventType {
  Tournament = "tournament",
  League = "league",
  Workshop = "workshop",
  Virtual = "virtual",
}

export interface Program {
  /** @format i32 */
  id?: number;
  abbr?: string;
  name?: string;
}

export enum EventLevel {
  World = "World",
  National = "National",
  Regional = "Regional",
  State = "State",
  Signature = "Signature",
  Other = "Other",
}

export interface Location {
  venue?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  region?: string;
  postcode?: string;
  country?: string;
  coordinates?: Coordinates;
}

export interface Coordinates {
  /** @format float */
  lat?: number;

  /** @format float */
  lon?: number;
}

export interface Division {
  /** @format int32 */
  id?: number;
  name?: string;

  /** @format int32 */
  order?: number;
}

export enum Grade {
  College = "College",
  HighSchool = "High School",
  MiddleSchool = "Middle School",
  ElementarySchool = "Elementary School",
}

export interface Team {
  /** @format int32 */
  id: number;
  number: string;
  team_name?: string;
  robot_name?: string;
  organization?: string;
  location?: Location;
  registered?: boolean;
  program: IdInfo;
  grade?: Grade;
}

export interface IdInfo {
  /** @format int32 */
  id: number;
  name: string;
  code?: string | null;
}

export interface MatchObj {
  /** @format int32 */
  id: number;
  event: IdInfo;
  division: IdInfo;

  /** @format int32 */
  round: number;

  /** @format int32 */
  instance: number;

  /** @format int32 */
  matchnum: number;

  /** @format date-time */
  scheduled?: string;

  /** @format date-time */
  started?: string;
  field?: string;
  scored: boolean;
  name: string;
  alliances: Alliance[];
}

export interface Alliance {
  color: "red" | "blue";

  /** @format int32 */
  score: number;
  teams: AllianceTeam[];
}

export interface AllianceTeam {
  team?: IdInfo;
  sitting?: boolean;
}

export interface Ranking {
  /** @format int32 */
  id?: number;
  event?: IdInfo;
  division?: IdInfo;

  /** @format int32 */
  rank?: number;
  team?: IdInfo;

  /** @format int32 */
  wins?: number;

  /** @format int32 */
  losses?: number;

  /** @format int32 */
  ties?: number;

  /** @format int32 */
  wp?: number;

  /** @format int32 */
  ap?: number;

  /** @format int32 */
  sp?: number;

  /** @format int32 */
  high_score?: number;
  average_points?: number;

  /** @format int32 */
  total_points?: number;
}

export interface Skill {
  /** @format int32 */
  id?: number;
  event?: IdInfo;
  team?: IdInfo;
  type?: SkillType;
  season?: IdInfo;
  division?: IdInfo;

  /** @format int32 */
  rank?: number;

  /** @format int32 */
  score?: number;

  /** @format int32 */
  attempts?: number;
}

export enum SkillType {
  Driver = "driver",
  Programming = "programming",
  PackageDeliveryTime = "package_delivery_time",
}

export interface Award {
  /** @format int32 */
  id?: number;
  event?: IdInfo;

  /** @format int32 */
  order?: number;
  title?: string;
  qualifications?: string[];

  /** Some awards are given out per tournament or division */
  designation?: "tournament" | "division" | null;
  classification?: "champion" | "finalist" | "semifinalist" | "quarterfinalist" | null;
  teamWinners?: TeamAwardWinner[];
  individualWinners?: string[];
}

export interface TeamAwardWinner {
  division?: IdInfo;
  team?: IdInfo;
}

export interface Season {
  /** @format int32 */
  id?: number;
  name?: string;
  program?: IdInfo;

  /** @format date-time */
  start?: string;

  /** @format date-time */
  end?: string;

  /** @format int32 */
  years_start?: number;

  /** @format int32 */
  years_end?: number;
}

export interface Error {
  /** @format int32 */
  code?: number;
  message?: string;
}

export interface PageMeta {
  current_page?: number;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: string;
  to?: number;
  total?: number;
}

export interface PaginatedTeam {
  meta?: PageMeta;
  data?: Team[];
}

export interface PaginatedEvent {
  meta?: PageMeta;
  data?: Event[];
}

export interface PaginatedAward {
  meta?: PageMeta;
  data?: Award[];
}

export interface PaginatedSeason {
  meta?: PageMeta;
  data?: Season[];
}

export interface PaginatedRanking {
  meta?: PageMeta;
  data?: Ranking[];
}

export interface PaginatedMatch {
  meta?: PageMeta;
  data?: MatchObj[];
}

export interface PaginatedSkill {
  meta?: PageMeta;
  data?: Skill[];
}

export interface PaginatedProgram {
  meta?: PageMeta;
  data?: Program[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://www.robotevents.com/api/v2";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Public Robot Events API
 * @version 1.0.21
 * @baseUrl https://www.robotevents.com/api/v2
 *
 * An API to access data on Robot Events officially.
 * ## Request Metadata
 * Pagination is performed the same way throughout each pageable endpoint using the query parameters `page` and `per_page`.
 * Please not that dates should be formatted according to RFC3339.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  events = {
    /**
     * @description Gets a List of Events
     *
     * @tags Event
     * @name EventGetEvents
     * @request GET:/events
     * @secure
     */
    eventGetEvents: (
      query?: {
        "id[]"?: number[];
        "sku[]"?: string[];
        "team[]"?: number[];
        "season[]"?: number[];
        start?: string;
        end?: string;
        "level[]"?: ("World" | "National" | "State" | "Signature" | "Other")[];
        myEvents?: boolean;
        "eventTypes[]"?: EventType[];
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedEvent, any>({
        path: `/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a Single Event
     *
     * @tags Event
     * @name EventGetEvent
     * @request GET:/events/{id}
     * @secure
     */
    eventGetEvent: (id: number, params: RequestParams = {}) =>
      this.request<Event, Error>({
        path: `/events/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Teams present at a given Event
     *
     * @tags Event
     * @name EventGetTeams
     * @request GET:/events/{id}/teams
     * @secure
     */
    eventGetTeams: (
      id: number,
      query?: {
        "number[]"?: string[];
        registered?: boolean;
        "grade[]"?: ("College" | "High School" | "Middle School" | "Elementary School")[];
        "country[]"?: string[];
        myTeams?: boolean;
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTeam, any>({
        path: `/events/${id}/teams`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Skills runs performed at a given Event
     *
     * @tags Event
     * @name EventGetSkills
     * @request GET:/events/{id}/skills
     * @secure
     */
    eventGetSkills: (
      id: number,
      query?: { "team[]"?: number[]; "type[]"?: ("driver" | "programming")[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSkill, any>({
        path: `/events/${id}/skills`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Awards at a given Event
     *
     * @tags Event
     * @name EventGetAwards
     * @request GET:/events/{id}/awards
     * @secure
     */
    eventGetAwards: (
      id: number,
      query?: { "team[]"?: number[]; "winner[]"?: string[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedAward, any>({
        path: `/events/${id}/awards`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Matches for a single Division of an Event
     *
     * @tags Event
     * @name EventGetDivisionMatches
     * @request GET:/events/{id}/divisions/{div}/matches
     * @secure
     */
    eventGetDivisionMatches: (
      id: number,
      div: number,
      query?: {
        "team[]"?: number[];
        "round[]"?: number[];
        "instance[]"?: number[];
        "matchnum[]"?: number[];
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedMatch, any>({
        path: `/events/${id}/divisions/${div}/matches`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Finalist Rankings for a single Division of an Event
     *
     * @tags Event
     * @name EventGetDivisionFinalistRankings
     * @request GET:/events/{id}/divisions/{div}/finalistRankings
     * @secure
     */
    eventGetDivisionFinalistRankings: (
      id: number,
      div: number,
      query?: { "team[]"?: number[]; "rank[]"?: number[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRanking, any>({
        path: `/events/${id}/divisions/${div}/finalistRankings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Rankings for a single Division of an Event
     *
     * @tags Event
     * @name EventGetDivisionRankings
     * @request GET:/events/{id}/divisions/{div}/rankings
     * @secure
     */
    eventGetDivisionRankings: (
      id: number,
      div: number,
      query?: { "team[]"?: number[]; "rank[]"?: number[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRanking, any>({
        path: `/events/${id}/divisions/${div}/rankings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  teams = {
    /**
     * @description Gets a List of Teams
     *
     * @tags Team
     * @name TeamGetTeams
     * @request GET:/teams
     * @secure
     */
    teamGetTeams: (
      query?: {
        "id[]"?: number[];
        "number[]"?: string[];
        "event[]"?: number[];
        registered?: boolean;
        "program[]"?: number[];
        "grade[]"?: ("College" | "High School" | "Middle School" | "Elementary School")[];
        "country[]"?: string[];
        myTeams?: boolean;
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTeam, any>({
        path: `/teams`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a Single Team
     *
     * @tags Team
     * @name TeamGetTeam
     * @request GET:/teams/{id}
     * @secure
     */
    teamGetTeam: (id: number, params: RequestParams = {}) =>
      this.request<Team, Error>({
        path: `/teams/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Events that a given Team has attended
     *
     * @tags Team
     * @name TeamGetEvents
     * @request GET:/teams/{id}/events
     * @secure
     */
    teamGetEvents: (
      id: number,
      query?: {
        "sku[]"?: string[];
        "season[]"?: number[];
        start?: string;
        end?: string;
        "level[]"?: ("World" | "National" | "State" | "Signature" | "Other")[];
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedEvent, any>({
        path: `/teams/${id}/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Matches that a given Team has played in
     *
     * @tags Team
     * @name TeamGetMatches
     * @request GET:/teams/{id}/matches
     * @secure
     */
    teamGetMatches: (
      id: number,
      query?: {
        "event[]"?: number[];
        "season[]"?: number[];
        "round[]"?: number[];
        "instance[]"?: number[];
        "matchnum[]"?: number[];
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedMatch, any>({
        path: `/teams/${id}/matches`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Rankings for a given Team
     *
     * @tags Team
     * @name TeamGetRankings
     * @request GET:/teams/{id}/rankings
     * @secure
     */
    teamGetRankings: (
      id: number,
      query?: { "event[]"?: number[]; "rank[]"?: number[]; "season[]"?: number[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRanking, any>({
        path: `/teams/${id}/rankings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Skills runs that a given Team has performed
     *
     * @tags Team
     * @name TeamGetSkills
     * @request GET:/teams/{id}/skills
     * @secure
     */
    teamGetSkills: (
      id: number,
      query?: { "event[]"?: number[]; "type[]"?: ("driver" | "programming")[]; "season[]"?: number[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSkill, any>({
        path: `/teams/${id}/skills`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Awards that a given Team has received
     *
     * @tags Team
     * @name TeamGetAwards
     * @request GET:/teams/{id}/awards
     * @secure
     */
    teamGetAwards: (
      id: number,
      query?: { "event[]"?: number[]; "season[]"?: number[]; page?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedAward, any>({
        path: `/teams/${id}/awards`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  programs = {
    /**
     * @description Find a single Program by ID
     *
     * @tags Program
     * @name ProgramGetProgram
     * @request GET:/programs/{id}
     * @secure
     */
    programGetProgram: (id: number, params: RequestParams = {}) =>
      this.request<Program, any>({
        path: `/programs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Programs
     *
     * @tags Program
     * @name ProgramGetPrograms
     * @request GET:/programs
     * @secure
     */
    programGetPrograms: (query?: { "id[]"?: number[]; page?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProgram, any>({
        path: `/programs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  seasons = {
    /**
     * @description Gets a List of Seasons
     *
     * @tags Season
     * @name SeasonGetSeasons
     * @request GET:/seasons
     * @secure
     */
    seasonGetSeasons: (
      query?: {
        "id[]"?: number[];
        "program[]"?: number[];
        "team[]"?: number[];
        start?: string;
        end?: string;
        active?: boolean;
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSeason, any>({
        path: `/seasons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a single Season
     *
     * @tags Season
     * @name SeasonGetSeason
     * @request GET:/seasons/{id}
     * @secure
     */
    seasonGetSeason: (id: number, params: RequestParams = {}) =>
      this.request<Season, any>({
        path: `/seasons/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a List of Events for a given Season
     *
     * @tags Season
     * @name SeasonGetEvents
     * @request GET:/seasons/{id}/events
     * @secure
     */
    seasonGetEvents: (
      id: number,
      query?: {
        "sku[]"?: string[];
        "team[]"?: number[];
        start?: string;
        end?: string;
        "level[]"?: ("World" | "National" | "State" | "Signature" | "Other")[];
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedEvent, any>({
        path: `/seasons/${id}/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
