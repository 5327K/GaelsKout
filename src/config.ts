import { Api } from "./api/Api";

export const ROBOTS_API_KEY = process.env.ROBOTS_API_KEY;

export type RootStackParamList = {
  Main: undefined;
  Event: { id: number; name: string };
};

export const api = new Api({
  baseApiParams: {
    headers: {
      Authorization: "Bearer " + ROBOTS_API_KEY,
    },
  },
});
