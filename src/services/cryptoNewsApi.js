import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": "d7c149516fmshd695bda40c7540fp19e051jsnfd11c488f1b2",
  "x-rapidapi-host": "google-news.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://google-news.p.rapidapi.com/v1",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ category, date }) =>
        createRequest(
          `/search?q=${category}+after:${date}&ceid=US:en&hl=en-US&gl=US`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
