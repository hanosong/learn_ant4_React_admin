import React, { memo, useState } from "react";
import "./index.less";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
const FormView = memo(() => {
  const [datePicVal, setDatePicVal] = useState(new Date());
  const dateChangHanle = (v) => {
    console.log(v,'v')
  }
  return (
    <div className="content-wrapper">
      <div>当前登录用户:haha</div>
      <div className="inner-wrapper">
        <div className="date-wrapper">
          <Calendar onChange={dateChangHanle} value={datePicVal}/>
        </div>
        <div className="logger-wrapper">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>
    </div>
  );
});

export default FormView;
