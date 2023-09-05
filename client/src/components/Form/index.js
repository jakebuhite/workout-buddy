import React from "react";
import "./style.css";
import Button from "../Button";

const Form = ({ id1, label1, type1, id2, label2, type2 }) => {
  return (
    <div class="form">
        <form id="form2" method="post">
            <div class="input_group">
                <input type={ type1 } id={ id1 } name={ id1 } placeholder={ label1 }></input>
            </div>
            <div class="input_group">
                <input type={ type2 } id={ id2 } name={ id2 } placeholder={ label2 }></input>
            </div>
        </form>
        <Button label="Submit" form="form2" value="Submit" />
    </div>
  );
};

export default Form;