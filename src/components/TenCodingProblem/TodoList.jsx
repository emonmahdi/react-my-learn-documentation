import { useState } from "react";

export default function TodoList() {
  const [taskList, setTaskList] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");

  const handleAddTask = () => {
    setTaskList([...taskList, taskDetail]);
    setTaskDetail("");
  };

  const handleRemoveTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const handleTaskUpdate = (value) => {
    setTaskDetail(value);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <>
        <h3>ToDO List</h3>
        <input
          type="text"
          placeholder="Add task detail here"
          value={taskDetail}
          onChange={(e) => handleTaskUpdate(e.target.value)}
        />
        <button onClick={() => handleAddTask()}>Add</button>
      </>
      <>
        <ul>
          {taskList &&
            taskList.map((item, index) => (
              <div key={index}>
                <li>
                  {item}{" "}
                  <button onClick={() => handleRemoveTask(index)}>
                    Remove
                  </button>
                </li>
              </div>
            ))}
        </ul>
      </>
    </div>
  );
}
