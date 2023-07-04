import React from "react"
import "../pages.css"

import Header from "../../components/Header/index"
import Button from "../../components/Button/index"

const LogPage = () => {
  return (
    <div class="logs">
      <div class="heading">
          <div class="title">
              <Header content="Logs." />
          </div>
      </div>
      <Button label="Add" onClick={()=>window.open(`${window.location.origin}/logs/add`)} />
    </div>
  );
};

export default LogPage;