import React from "react"
import "../pages.css"

import Header from "../../components/Header"

const WorkoutsPage = () => {
  return (
    <div class="container">
      <div class="heading">
          <div class="title">
              <Header content="Workouts." />
          </div>
      </div>
      <div class="workouts">
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Difficulty</th>
          </tr>
          <tr>
            <td>1</td>
            <td><a href="/workout/1">Beginner Workout - Arms</a></td>
            <td>EASY</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default WorkoutsPage;