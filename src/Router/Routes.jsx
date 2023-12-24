import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Homes/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import PrivateRoute from "./PrivateRoute"
import Secret from "../pages/shared/Secret"
import About from "../pages/About/About"
import Services from "../pages/Services/Services"
import Dashboard from "../layouts/Dashboard"
import TodoList from "../pages/Dashboard/TodoList/TodoList"
import AddTasks from "../pages/Dashboard/AddTasks/AddTasks"
import AllTask from "../pages/Dashboard/AllTask/AllTask"
import Blog from "../pages/Blog/Blog"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "todoList",
        element: <TodoList></TodoList>,
        },
        {
            path: "addTasks",
            element: <AddTasks></AddTasks>
        },
        {
            path: "allTasks",
            element: <AllTask></AllTask>
        }
    ],
  },
])
