import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const resumeApi = createApi({
  reducerPath: 'resumeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getpart1:builder.mutation({
        query:(part1)=>{
            return{
                method:'POST',
                url:'/part1',
                body:part1
            }
        }
    }),
    getpart2:builder.mutation({
        query:(part2)=>{
            return{
                method:'POST',
                url:'/part2',
                body:part2
            }
        }
    }),
    getpart3:builder.mutation({
        query:(part3)=>{
            return{
                method:'POST',
                url:'/part3',
                body:part3
            }
        }
    }),
    getpart4:builder.mutation({
        query:(part4)=>{
            return{
                method:'POST',
                url:'/part4',
                body:part4
            }
        }
    }),
    getpart5:builder.mutation({
        query:(part5)=>{
            return{
                method:'POST',
                url:'/part5',
                body:part5
            }
        }
    }),
    final:builder.mutation({
        query:(final)=>{
            return{
                method:'POST',
                url:'/final',
                body:final
            }
        }
    }),
    getpart1data:builder.query({
        query:()=>`part1`
      }),
      getpart2data:builder.query({
          query:()=>`part2`
        }),
        getpart3data:builder.query({
            query:()=>`part3`
          }),
          getpart4data:builder.query({
            query:()=>`part4`
          }),
          getpart5data:builder.query({
            query:()=>`part5`
          }),
          getfinaldata:builder.query({
            query:()=>`final`
          }),
    })
  })

  export const {useGetpart1Mutation,useGetpart2Mutation,useGetpart3Mutation,useGetpart4Mutation,useGetpart5Mutation ,useFinalMutation,useGetpart1dataQuery,useGetpart2dataQuery,useGetpart3dataQuery,useGetpart4dataQuery,useGetpart5dataQuery,useGetfinaldataQuery} = resumeApi
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = 