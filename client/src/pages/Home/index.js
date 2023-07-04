import React from "react"
import "../pages.css"

import Header from "../../components/Header/index"
import Button from "../../components/Button/index"

const HomePage = () => {
  return (
    <div class="home">
      <div class="heading">
          <div class="title">
              <Header content="WORKOUT BUDDY." />
          </div>
          <h2>Never lose track of your workouts <div class="bold">again</div>.</h2>
      </div>
      <Button label="Log your Workout" onClick={()=>window.open(`${window.location.origin}/logs`)} />
    </div>
  );
};

export default HomePage;