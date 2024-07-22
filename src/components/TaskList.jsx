import TaskItem from "./TaskItem";

export default function TaskList({ tasks = [] }) {
  console.log("Tasks", tasks);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
}
