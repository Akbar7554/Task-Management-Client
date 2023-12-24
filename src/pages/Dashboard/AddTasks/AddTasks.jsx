import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2"
import useAuth from "../../../hooks/useAuth"

const AddTasks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const AxiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const onSubmit = async (data) => {
    const myTasks = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      date: data.date,
      email: user?.email,
    }

    const tasksRes = await AxiosSecure.post("/tasks", myTasks)
    console.log(tasksRes?.data)
    if (tasksRes?.data?.insertedId) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data.title} added successfully to the survey!`,
        showConfirmButton: false,
        timer: 2000,
      })
      reset()
    }
  }
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text text-lg font-semibold">Task Title</span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Task Title"
            className="input input-bordered w-full"
          />
          {errors.title && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Description
            </span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <span className="text-red-600">Description is required</span>
          )}
        </div>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text text-lg font-semibold">Task Date</span>
          </label>
          <input
            {...register("date", { required: true })}
            type="date"
            placeholder="Date"
            className="input input-bordered w-full"
          />
          {errors.title && (
            <span className="text-red-600">Date is required</span>
          )}
        </div>
        <div className="flex gap-6">
          {/* Category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-lg font-semibold">Category</span>
            </label>
            <select
              {...register("priority", { required: true })}
              className="select select-bordered w-full"
              defaultValue="default"
            >
              {" "}
              Select a Priority
              <option disabled value="default">
                Select a Priority
              </option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
            {errors.options && (
              <span className="text-red-600">Priority is required</span>
            )}
          </div>
        </div>
        <button type="submit" className="btn bg-orange-500 text-gray-50">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTasks
