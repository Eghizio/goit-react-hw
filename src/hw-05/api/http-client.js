import axios from "axios";
import trendingMock from "./mocks/trending.json";
import searchMock from "./mocks/search.json";
import detailsMock from "./mocks/details.json";
import creditsMock from "./mocks/credits.json";
import reviewsMock from "./mocks/reviews.json";

const mockEnabled = false;

const API_READ_ACCESS_TOKEN = import.meta.env.VITE_MOVIEDB_API_TOKEN;

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 30_000,
  headers: {
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    accept: "application/json",
  },
  params: {
    include_adult: false,
    language: "en-US",
  },
});

const mockedClient = {
  async get(endpoint) {
    await this._sleep(1_500);
    return { data: this._resolveData(endpoint) };
  },

  _resolveData(endpoint) {
    if (endpoint.startsWith("/trending")) return trendingMock;

    if (endpoint.startsWith("/search")) return searchMock;

    if (endpoint.startsWith("/movie") && endpoint.endsWith("/credits"))
      return creditsMock;

    if (endpoint.startsWith("/movie") && endpoint.endsWith("/reviews"))
      return reviewsMock;

    if (endpoint.startsWith("/movie")) return detailsMock;

    throw new Error(`Unknown endpoint for mocked client "${endpoint}"`);
  },

  async _sleep(ms = 1_500) {
    return new Promise((r) => setTimeout(r, ms));
  },
};

export const httpClient = mockEnabled ? mockedClient : axiosClient;
