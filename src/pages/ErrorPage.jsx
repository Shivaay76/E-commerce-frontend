import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops! Error</h1>
            <p>Error : {error.message}</p>
            <p>Status : {error.status}</p>
            <p>StatusText : {error.statusText}</p>
        </div>
    )
}

export default ErrorPage