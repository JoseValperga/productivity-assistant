import { useState } from "react";

export default function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      const response = await fetch("/api/tasks/analyzeTask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });

      const data = await response.json();
      console.log("AI Response:", data);

      fetchTasks(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-4 border border-gray-200 rounded-lg task-form"
    >
      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-2 mb-10 border border-gray-300 rounded-md task-textarea" // Añadimos margen inferior
        rows="4"
        cols="50"
      ></textarea>
      <button
        type="submit"
        className="absolute px-4 py-2 text-white bg-blue-500 rounded-md task-button bottom-2 left-4"
      >
        Add Task
      </button>
    </form>
  );
}
