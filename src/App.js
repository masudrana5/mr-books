import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import ErrorPage from './components/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () =>
          fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({params}) => 
          fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
