import React from "react"
import "../pages.css"

import Header from "../../components/Header"
import Form from "../../components/Form"

const AddLogPage = () => {
  return (
    <div class="container">
      <div class="heading">
          <div class="title">
              <Header content="Add Log." />
          </div>
          <div class="logform">
              <Form id1="logdate" label1="Date" type1="date" id2="hours" label2="Total workout hours" type2="text"></Form>
          </div>
      </div>
    </div>
  );
};

export default AddLogPage;