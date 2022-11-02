import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import routing from "./routing";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            useErrorBoundary: true,
            staleTime: 10000,
        },
        mutations: {
            useErrorBoundary: true,
        },
        suspense: true,
    },
})
console.log("--------------------------------" , queryClient)


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={routing} />
        <ReactQueryDevtools  ></ReactQueryDevtools>
    </QueryClientProvider>
);

reportWebVitals();
