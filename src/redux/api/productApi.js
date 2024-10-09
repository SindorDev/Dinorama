import { api } from "./index";

const ProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["Product"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    getProductByCategory: build.query({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
     useGetProductQuery,
     useGetProductByIdQuery,
     useGetProductByCategoryQuery
} = ProductApi;
