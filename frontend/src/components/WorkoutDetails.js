import React from "react";

export const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4> {workout.title} </h4>
      <p>
        <strong>Load (kg): </strong> {workout.load}{" "}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}{" "}
      </p>
      <p>{workout.createAt} </p>
    </div>
  );
};

export default WorkoutDetails;