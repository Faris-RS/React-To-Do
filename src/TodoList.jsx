import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";

export default function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const deleteTask = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
    localStorage.setItem("taskList", JSON.stringify(updatedList));
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggleTask = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    if (updatedCompletedTasks.includes(index)) {
      const taskIndex = updatedCompletedTasks.indexOf(index);
      updatedCompletedTasks.splice(taskIndex, 1);
    } else {
      updatedCompletedTasks.push(index);
    }
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <>
      <div className="header text-center">
        <h1>ToDo List</h1>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-cont">
        {taskList &&
          taskList.map((obj, index) => (
            <div onClick={() => toggleTask(index)}>
              <Card
                key={index}
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                completed={completedTasks.includes(index)}
              />
            </div>
          ))}
      </div>
      <CreateTask toggle={setModal} modal={modal} save={saveTask} />
    </>
  );
}
