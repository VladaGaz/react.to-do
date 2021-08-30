import React from "react";

const Task = ({ task, ...props }) => {

   const ActionBtn = () => (
      <div className="action-btn">{task.done
         ? <p onClick={props.deleteTask}>❌</p>
         : <p onClick={props.doneTask}>✔️</p>}
      </div>
   )

   return (
      <div className="task">
         <p>{task.title}</p>
         <ActionBtn></ActionBtn>
      </div>
   )
}

export default Task;