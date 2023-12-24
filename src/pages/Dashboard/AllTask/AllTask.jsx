import useAllTasks from "../../../hooks/useAllTasks"

const AllTask = () => {
  const [task] = useAllTasks()
  console.log(task)
  return (
    <div className="mt-14 p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      {task.map((item) => (
        <div
          key={item._id}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0"></div>
            <div className="p-8">
              <div className="uppercase tracking-wide font-bold  text-xl ">
                Task Title :{" "}
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              <p className="mt-2 text-lg text-slate-500">
                <span className="font-bold">Description :</span>{" "}
                {item.description}
              </p>
              <p className="mt-2 text-lg text-slate-500">
                <span className="font-bold">priority :</span> {item.priority}
              </p>
              <p className="mt-2 text-lg text-slate-500">
                <span className="font-bold">Date :</span>{" "}
                {item.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllTask
