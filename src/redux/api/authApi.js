import { api } from "./index";

const AuthApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "https://dummyjson.com/users/add",
        method: "POST",
        body
      }),
      invalidatesTags: ["Products"]
    }),
    login: build.mutation({
      query: (body) => ({
        url: "https://dummyjson.com/users/login",
        method: "POST",
        body
      }),
      invalidatesTags: ["Products"]
    }),
    getProfile: build.query({
      query: () => ({
        url: "https://dummyjson.com/users/me",
      }),
      providesTags: ["Products"]
    }),
  }),
});

export const {
     useRegisterMutation,
     useLoginMutation,
     useGetProfileQuery
} = AuthApi;
