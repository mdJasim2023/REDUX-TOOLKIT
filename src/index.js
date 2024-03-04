import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Part2 from './MyComponents/Part2';
import Part1 from './MyComponents/Part1';
import Part3 from './MyComponents/Part3';
import Part4 from './MyComponents/Part4';
import Part5 from './MyComponents/Part5';
import Final from './MyComponents/Final';
import Main from './ResumeParts/Main';
import Home from './MyComponents/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/part1',
        element:<Part1></Part1>
      },
      {
        path:'/part2',
        element:<Part2></Part2>
      },
      {
        path:'/part3',
        element:<Part3></Part3>
      },
      {
        path:'/part4',
        element:<Part4></Part4>
      },
      {
        path:'/part5',
        element:<Part5></Part5>
      },
      {
        path:'/final',
        element:<Final></Final>
      },
      {
        path:'/main',
        element:<Main></Main>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
