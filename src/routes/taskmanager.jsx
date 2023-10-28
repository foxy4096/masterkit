import { useState } from "react";
import CustomInput from "../components/Input";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="h-screen text-center">
      <div className="max-w-lg mx-auto my-8 p-4 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>
        <div className="flex space-x-2 justify-center">
          <CustomInput
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task"
          />
        </div>
        <button
          onClick={addTask}
          className="px-3 py-2 bg-emerald-500 mt-3 rounded-md w-20"
        >
          Add
        </button>
        {tasks.length !== 0 && (
          <ul className="mt-4 space-y-2 bg-slate-800 p-3 rounded-md shadow-sm">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="mr-2"
                />
                <p
                  className={`flex items-center ${
                    task.completed ? "line-through text-gray-500" : "text-white"
                  }`}
                >
                  {task.text}
                </p>
                <button
                  onClick={() => removeTask(index)}
                  className="ml-auto bg-red-500 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
