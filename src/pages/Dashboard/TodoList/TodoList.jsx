import { useState } from "react"
import {DragDropContext} from "react-beautiful-dnd"
import Column from "./Column"

const TodoList = () => {

    const initialData = {
      tasks: {
        1: { id: 1, content: "hello1" },
        2: { id: 2, content: "hello2" },
        3: { id: 3, content: "hello3" },
        4: { id: 4, content: "hello4" },
        5: { id: 5, content: "hello5" },
      },
      columns: {
        "column-1": {
          id: "column-1",
          title: "To-Do",
          taskIds: [1, 2, 3, 4, 5],
        },
        "column-2": {
          id: "column-2",
          title: "In-Progress",
          taskIds: [],
        },
        "column-3": {
          id: "column-3",
          title: "Completed",
          taskIds: [],
        },
      },
      columnOrder: ["column-1", "column-2", "column-3"],
    }

    const [state, setState] = useState(initialData)

    const onDragEnd = (result) => {
        const {destination, source} = result
    }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex justify-between gap-5 px-16">
              {
                  state.columnOrder.map((columnId) => {
                      const column = state.columns[columnId]
                      const tasks = column.taskIds.map(taskId => state.tasks[taskId])
                      return <Column key={column.id} column={column} tasks={tasks}></Column>
                  })
              }
      </div>
    </DragDropContext>
  )
}

export default TodoList
