

    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    const cryptoApiHeaders = {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '4c7b69e727msh051aabd9ab0ef87p17aff4jsn0148c3d269d8'
    }
    
    const baseUrl = 'https://coinranking1.p.rapidapi.com'

    const createRequest = (url) => ({url, headers: cryptoApiHeaders});

    export const cryptoApi = createApi({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`),
            }),
            getExchanges: builder.query({
                query: () => createRequest(`/exchanges`),
            }),
            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}`),
            }),
            getCryptoHistory: builder.query({
                query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
            })
        })
    })

    export const { useGetCryptosQuery, useGetExchangesQuery , useGetCryptoDetailsQuery , useGetCryptoHistoryQuery} = cryptoApi;