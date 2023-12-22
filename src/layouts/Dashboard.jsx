import { NavLink, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <div className="flex max-w-6xl mx-auto my-10">
      <div className="w-64 min-h-screen text-white bg-orange-500">
        <img
          src={user?.photoURL}
          className="rounded-full mx-auto mt-5"
        />
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/addTasks">Add Tasks</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/userHome">User Home</NavLink>
          </li>
          <div className="divider bg-white"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
