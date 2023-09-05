import React from "react"
import "../pages.css"

import Header from "../../components/Header"
import Button from "../../components/Button"

const LogPage = () => {
  return (
    <div class="logs">
      <div class="heading">
          <div class="title">
              <Header content="Logs." />
          </div>
      </div>
      <div class="statistics">
        <div class="hours">Total Hours (2023): 643</div>
        <div class="streak">Your current streak is 62 days</div>
        <table>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time (Hours)</th>
          </tr>
          <tr>
            <td>1</td>
            <td>07/11/2023</td>
            <td>4.5</td>
          </tr>
        </table>
      </div>
      <Button label="Add" onClick={()=>window.open(`${window.location.origin}/logs/add`, "_self")} />
    </div>
  );
};

export default LogPage;