import React from 'react';

export default function Card({ taskObj, index, deleteTask, completed }) {
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className={`card-wrapper mr-5 ${completed ? 'completed' : ''}`} style={{ backgroundColor: completed ? colors[index % 5].primaryColor : '' }}>
      <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
      <div className="task-holder">
        <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        {!completed && (
          <div
            className="delete-btn"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "20px",
              paddingLeft: "9px",
              paddingRight: "9px",
              paddingTop: "3px",
              paddingBottom: "3px",
              border: `2px solid ${colors[index % 5].primaryColor}`,
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors[index % 5].primaryColor;
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "initial";
              e.target.style.color = colors[index % 5].primaryColor;
            }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash-alt">Delete</i>
          </div>
        )}
      </div>
    </div>
  );
}
