import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Rout from './Componets/Rout';
import { Children } from 'react';
import Navbar from './Componets/NavBar/Navbar';
import Topic from './Componets/Topic/Topic';
import Quiz from './Componets/Quiz/Quiz';
import NoPage from './Componets/NoPage/NoPage';
import Blog from './Componets/Blog/Blog';
const router = createBrowserRouter(
  [{
    path: '/', element: <Rout />,
    children: [
      {
        path: '/',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topic />
      },
      {
        path: '/quiz',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz/1'),
        element: <Quiz />
      },
      {
        path: '*',
        element: <NoPage />,
      },
      {
        path: '/blog',
        element: <Blog />
      }

    ]
  }]
)
function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
