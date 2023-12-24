import { NavLink, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <div className="flex max-w-8xl mx-auto my-10">
      <div className="w-64 min-h-screen text-white bg-orange-500">
        <img src={user?.photoURL} className="rounded-full mx-auto mt-5" />
        <p className="text-white text-center border-2 p-2 m-2 text-lg">{user?.displayName}</p>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/addTasks">Add Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allTasks">All Tasks</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/todoList">To Do List</NavLink>
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
