import { NavLink, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  
  const error = useRouteError();
  console.log(error);
  return (
    <>
     <h1>Oops! An error occcured.</h1>
     {error && <p>{error.data}</p>}
     <NavLink to="/"><button>Home Page</button></NavLink>
    </>
  )
}

export default ErrorPage