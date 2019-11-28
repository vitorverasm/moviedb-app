/**
 * image-path
 */
export type ImagePath = string | null;
/**
 * Movie List Result Object
 */
export interface MovieListObject {
  poster_path?: ImagePath;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: ImagePath;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}
/**
 * Movie List Result With Rating Object
 */
export interface MovieListResultWithRatingObject {
  adult?: boolean;
  backdrop_path?: ImagePath;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  release_date?: string;
  poster_path?: ImagePath;
  popularity?: number;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  rating?: number;
}
/**
 * Movie List Results Object (with media_type)
 */
export interface MovieListResultsObjectWithMediaType {
  poster_path?: ImagePath;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  original_title?: string;
  genre_ids?: number[];
  id?: number;
  media_type: 'movie';
  original_language?: string;
  title?: string;
  backdrop_path?: ImagePath;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}
/**
 * Person List Result Object (with media type)
 */
export interface PersonListResultObjectWithMediaType {
  profile_path?: ImagePath;
  adult?: boolean;
  id?: number;
  media_type: 'person';
  known_for?: (
    | MovieListResultsObjectWithMediaType
    | TvListResultsObjectWithMediaType
  )[];
  name?: string;
  popularity?: number;
}
/**
 * Person List Results Object
 */
export interface PersonListResultsObject {
  profile_path?: ImagePath;
  adult?: boolean;
  id?: number;
  known_for?: (
    | MovieListResultsObjectWithMediaType
    | TvListResultsObjectWithMediaType
  )[];
  name?: string;
  popularity?: number;
}
/**
 * TV List Result Object
 */
export interface TvListResultObject {
  poster_path?: ImagePath;
  popularity?: number;
  id?: number;
  backdrop_path?: ImagePath;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}
/**
 * TV List Result With Rating Object
 */
export interface TvListResultWithRatingObject {
  backdrop_path?: ImagePath;
  first_air_date?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_name?: string;
  overview?: string;
  origin_country?: string[];
  poster_path?: ImagePath;
  popularity?: number;
  name?: string;
  vote_average?: number;
  vote_count?: number;
  rating?: number;
}
/**
 * TV List Results Object (with media_type)
 */
export interface TvListResultsObjectWithMediaType {
  poster_path?: ImagePath;
  popularity?: number;
  id?: number;
  overview?: string;
  backdrop_path?: ImagePath;
  vote_average?: number;
  media_type: 'tv';
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}
