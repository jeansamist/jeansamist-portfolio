import React, { FunctionComponent, ReactNode } from "react";
import "@/styles/CircularProgressBar.css"; // Create this CSS file

export const CircularProgressBar: FunctionComponent<{
  progress: number;
  label?: ReactNode;
  width?: number;
}> = ({ progress, width = 100, label }) => {
  const radius = (width * 40) / 100;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference; // Updated offset calculation

  return (
    <div
      className="circular-progress"
      style={{ width: width + "px", height: width + "px" }}
    >
      <svg
        width={width}
        height={width}
        style={{ width: width + "px", height: width + "px" }}
      >
        <circle
          className="circle-bg stroke-gray-100"
          cx={width / 2}
          cy={width / 2}
          style={{ strokeWidth: (width * 8) / 100 + "px" }}
          r={radius}
        />
        <circle
          className="circle stroke-primary"
          cx={width / 2}
          cy={width / 2}
          r={radius}
          style={{ strokeWidth: (width * 8) / 100 + "px" }}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div
        className={"progress-text font-bold"}
        style={{ fontSize: (width * 20) / 100 + "px" }}
      >
        {label ? label : progress + "%"}
      </div>
    </div>
  );
};
