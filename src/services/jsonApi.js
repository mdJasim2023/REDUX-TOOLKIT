import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const resumeApi = createApi({
  reducerPath: 'resumeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getHeader:builder.mutation({
        query:(headform)=>{
            return{
                method:'POST',
                url:'/HeaderForm',
                body:headform
            }
        }
    })
    }),
  })

  export const {useGetHeaderMutation} = resumeApi
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = 