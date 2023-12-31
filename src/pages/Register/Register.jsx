import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import SocialLogin from "../../components/SocialLogin/SocialLogin"
const Register = () => {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoURL)
          .then(() => {
              navigate("/")
            
          axiosPublic.post("/users")
          const userInfo = {
            name: data.name,
            email: data.email.toLowerCase(),
          }
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database")
              reset()
              Swal.fire({
                position: "top",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              })
            }
          })
        })
        .catch((error) => console.log(error))
    })
  }
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-[#614385] to-[#516395]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#00CDAC]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-white">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your FullName"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-white">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter Valid Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-white">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter Valid Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-white">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-lg text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-center text-white text-xl my-3">
              <small>
                Already have an account <Link to="/login" className="font-bold underline">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
