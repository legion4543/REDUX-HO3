import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./features/taskSlice";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);

  const handleAddTask = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      alert("Please enter a task.");
      return;
    }

    dispatch(addTask(trimmedTask));
    setTask("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Simple Task Manager</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={handleAddTask}>Add</button>
        </div>

        <h2>Tasks</h2>

        {tasks.length === 0 ? (
          <p className="empty">No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;