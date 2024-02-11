import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const myApi = createApi({
  reducerPath:"api",
  baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:3000/",
  }),
  endpoints:(builder)=>({
    getPost:builder.query<Post,string>({query: (id) => 'post'})
  })
})