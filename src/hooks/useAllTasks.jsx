import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useAllTasks = () => {
  const AxiosSecure = useAxiosSecure()

  const {
    data: task = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/tasks")
      return res.data
    },
  })

  return [task, loading, refetch]
}

export default useAllTasks
