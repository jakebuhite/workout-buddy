import React from "react"
import "../pages.css"

import Header from "../../components/Header"
import Exercise from "../../components/Exercise"
import Button from "../../components/Button"

const WorkoutPage = () => {
  return (
    <div class="container">
      <div class="heading">
          <div class="title">
              <Header content="Workout." />
          </div>
          <div class="exercises">
            <Exercise title="3x10 Pullups" description="Maybe some extra text..." imgsrc="https://thumbs.dreamstime.com/z/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg?w=992"></Exercise>
            <Exercise title="3x25 Crunches" description="Maybe some extra text..." imgsrc="https://thumbs.dreamstime.com/z/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg?w=992"></Exercise>
          </div>
          <Button label="Back" onClick={()=>window.open(`${window.location.origin}/workouts`, "_self")} style={{margin: 20 + 'px'}} />
      </div>
    </div>
  );
};

export default WorkoutPage;