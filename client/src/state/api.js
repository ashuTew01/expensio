import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { importMeta } from "vite";

const reactAppBaseUrl = process.env.REACT_APP_BASE_URL;

const DEFAULT_HEADERS = {
  Authorization: `Bearer ${
    JSON.parse(localStorage.getItem("tokenExpensio"))?.token
  }`,
};

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: reactAppBaseUrl }),
  // prepareHeaders: (headers, { getState }) => {
  // 	const token = JSON.parse(localStorage.getItem("userInfoEcoTrack"))?.token; // Optional chaining for nullish coalescing
  // 	console.log(token);
  // 	// console.log("Above should be the token");
  // 	if (token) {
  // 		headers.set("Authorization", `Bearer ${token}`);
  // 	}

  // 	return headers;
  // },
  reducerPath: "adminApi",
  tagTypes: ["User", "Dashboard"],
  endpoints: (build) => ({
    expenseTest: build.query({
      query: () => ({
        url: "expense/test",
        method: "GET",
        headers: DEFAULT_HEADERS,
      }),
    }),
    saveExpenses: build.mutation({
      query: (data) => ({
        url: `expense/add`,
        method: "POST",
        body: data,
        headers: DEFAULT_HEADERS,
      }),
    }),
    getAllCategories: build.query({
      query: () => ({
        url: `category`,
        method: "GET",
        headers: DEFAULT_HEADERS,
      }),
    }),
    getAllEvents: build.query({
      query: () => ({
        url: `event/all`,
        method: "GET",
        headers: DEFAULT_HEADERS,
      }),
    }),
    getPsychologicalTypes: build.query({
      query: () => ({
        url: `psycho-types`,
        method: "GET",
        headers: DEFAULT_HEADERS,
      }),
    }),
    getAllExpenses: build.query({
      query: ({
        start_date,
        end_date,
        search,
        event,
        categoryCode,
        psychologicalTypeCode,
        mood,
        page,
        pageSize,
        id,
        goalId,
        userId,
      }) => ({
        url: `expense`,
        method: "GET",
        params: {
          start_date,
          end_date,
          search,
          event,
          categoryCode,
          psychologicalTypeCode,
          mood,
          page,
          pageSize,
          id,
          goalId,
          userId,
        },
        headers: DEFAULT_HEADERS,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,

  useGetUserQuery,
  useGetAllEventsQuery,
  useGetPsychologicalTypesQuery,

  useExpenseTestQuery,

  useGetAllExpensesQuery,

  useSaveExpensesMutation,
  useGetAllCategoriesQuery,
} = api;
