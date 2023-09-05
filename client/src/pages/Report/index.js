import React from "react"
import "../pages.css"

import Header from "../../components/Header"
import Form from "../../components/Form"

const ReportPage = () => {
  return (
    <div class="container">
      <div class="heading">
          <div class="title">
              <Header content="Report." />
          </div>
          <div class="rprtform">
              <Form id1="title" label1="Subject" type1="text" id2="msg" label2="Reason for report" type2="text"></Form>
          </div>
      </div>
    </div>
  );
};

export default ReportPage;