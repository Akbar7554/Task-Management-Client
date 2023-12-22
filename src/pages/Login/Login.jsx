import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SocialLogin from "../../components/SocialLogin/SocialLogin"
import Swal from "sweetalert2"

const Login = () => {
  const { signIn } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.form?.pathname || "/"

  const handleLogin = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password).then((result) => {
      const user = result.user
      console.log(user)
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-[#614385] to-[#516395]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#00CDAC]">
          <form onSubmit={handleLogin} className="card-body text-white">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-white text-lg">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="text-center my-5 text-white">
            New Here ?{" "}
            <Link to="/register" className="font-bold underline">
              Create an Account!
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
