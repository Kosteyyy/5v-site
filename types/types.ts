export type TEventsResponse = {
  errorCode: number;
  errorMessage: string;
  result: {
    data: TEvent[];
  };
};
export type TEvent = {
  id: number;
  name: string;
  url: string;
  lat: number;
  lon: number;
  city_name: string;
  subject_name: string;
  status: string;
  status_id: number;
};
