import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css'


import store from "./slices/store"

import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            }
        ],
    }
]);


function App() {

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}>

                </RouterProvider>
            </Provider>
        </>
    )
}

export default App
