import { Api } from "./api/Api";

export const ROBOTS_API_KEY = process.env.ROBOTS_API_KEY;

export type RootStackParamList = {
  Main: undefined;
  "View Event": { id: number; };
};

export const api = new Api({
  baseApiParams: {
    headers: {
      Authorization: "Bearer " + ROBOTS_API_KEY,
    },
  },
});
