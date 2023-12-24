import { Draggable, Droppable } from "react-beautiful-dnd"

const Column = ({ column, tasks }) => {
  return (
    <div className="rounded bg-white w-[350px] h-[620px] flex flex-col">
      <div className="flex items-center bg-black h-16 rounded px-6 m-2">
        <h2 className="text-lg font-semibold text-white mx-auto">
          {column.title}
        </h2>
      </div>
      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="px-6 flex-1 flex-col"
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
                      {tasks.map((task, index) => <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                          {(draggableProvided, draggableSnapshot) => {
                              <div
                                  className="mb-4 h-20 rounded p-6 bg-black"
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  ref={draggableProvided.innerRef}
                              >
                                  <h2
                                      className="text-base text-white">
                                  {task.content}
                                </h2>
                              </div>
                }}
            </Draggable>)}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
