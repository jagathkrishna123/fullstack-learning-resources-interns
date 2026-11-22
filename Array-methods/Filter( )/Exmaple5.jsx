

// Filter completed and pending tasks.........................

import React from "react";

function App() {

  const tasks = [
    { id: 1, title: "Learn React", status: "completed" },
    { id: 2, title: "Learn Node.js", status: "pending" },
    { id: 3, title: "Practice JavaScript", status: "completed" },
    { id: 4, title: "Learn MongoDB", status: "pending" }
  ];

  const completedTasks = tasks.filter((task) => {
    return task.status === "completed";
  });

  return (
    <div>
      <h2>Completed Tasks</h2>

      {completedTasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}

export default App;