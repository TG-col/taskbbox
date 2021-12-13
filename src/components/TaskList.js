import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

import { useDispatch, useSelector } from "react-redux";
import { updateTaskState } from "../lib/store";

export function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
PureTaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  //I took off the is Required as per arroe in terminal saying:
  //Failed prop type: The prop `onPinTask` is marked as required in `PureTaskList`, but its value is `undefined`
  onPinTask: PropTypes.func.isRequired,
  /** Event to change the task to archived */
  //I took off the is Required as per arroe in terminal saying:
  //Failed prop type: The prop `onPinTask` is marked as required in `PureTaskList`, but its value is `undefined`
  onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
  loading: false,
};

export const TaskList = () => {
  // We're retrieving our state from the store
  const tasks = useSelector((state) => state.tasks);
  // We're defining an variable to handle dispatching the actions back to the store
  const dispatch = useDispatch();

  const pinTask = (value) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (value) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };

  const filteredTasks = tasks.filter(
    (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
  );
  return (
    <PureTaskList
      tasks={filteredTasks}
      onPinTask={(task) => pinTask(task)}
      onArchiveTask={(task) => archiveTask(task)}
    />
  );
};

// import React from "react";

// import Task from "./Task";

// export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
//   const events = {
//     onPinTask,
//     onArchiveTask,
//   };

//   if (loading) {
//     return <div className="list-items">loading</div>;
//   }

//   if (tasks.length === 0) {
//     return <div className="list-items">empty</div>;
//   }

//   return (
//     <div className="list-items">
//       {tasks.map((task) => (
//         <Task key={task.id} task={task} {...events} />
//       ))}
//     </div>
//   );
// }

//Lesson #3
// import React from "react";
// import PropTypes from "prop-types";

// import Task from "./Task";

// export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
//   const events = {
//     onPinTask,
//     onArchiveTask,
//   };

//   const LoadingRow = (
//     <div className="loading-item">
//       <span className="glow-checkbox" />
//       <span className="glow-text">
//         <span>Loading</span> <span>cool</span> <span>state</span>
//       </span>
//     </div>
//   );
//   if (loading) {
//     return (
//       <div className="list-items">
//         {LoadingRow}
//         {LoadingRow}
//         {LoadingRow}
//         {LoadingRow}
//         {LoadingRow}
//         {LoadingRow}
//       </div>
//     );
//   }
//   if (tasks.length === 0) {
//     return (
//       <div className="list-items">
//         <div className="wrapper-message">
//           <span className="icon-check" />
//           <div className="title-message">You have no tasks</div>
//           <div className="subtitle-message">Sit back and relax</div>
//         </div>
//       </div>
//     );
//   }
//   const tasksInOrder = [
//     ...tasks.filter((t) => t.state === "TASK_PINNED"),
//     ...tasks.filter((t) => t.state !== "TASK_PINNED"),
//   ];
//   return (
//     <div className="list-items">
//       {tasksInOrder.map((task) => (
//         <Task key={task.id} task={task} {...events} />
//       ))}
//     </div>
//   );
// }
// TaskList.propTypes = {
//   /** Checks if it's in loading state */
//   loading: PropTypes.bool,
//   /** The list of tasks */
//   tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
//   /** Event to change the task to pinned */
//   onPinTask: PropTypes.func,
//   /** Event to change the task to archived */
//   onArchiveTask: PropTypes.func,
// };
// TaskList.defaultProps = {
//   loading: false,
// };

//Lesson#4
