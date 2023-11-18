import React, { memo, useState } from "react";
import './index.less';

export default memo(({day, date}) => {
  const [hourMsg, setHourMsg] = useState({
    norMalTime: '0',
    overTime: '0',
  })
  const isWeekDay = day !== '周日' && day !== '周六';
  const [workInfo, setWorkInfo] = useState(() => {
    const {overTime, norMalTime} = hourMsg;
    if(isWeekDay){
      return `正常 ${norMalTime}h / 加班${overTime}h`
    }else{
      return `加班${overTime}h`
    }
  })
  const renderWorkInfoWrapper = () => {
    if(isWeekDay){
      return 'workInfo-wrapper-week-day'
    }else{
      return 'workInfo-wrapper-overtime-day'
    }
  }
  return (
    <div className="logger-wrapper">
      <div>{`${day} ${date}`}</div>
      <div className="work-info-wrapper">
        {workInfo}
        <div className={renderWorkInfoWrapper()}></div>
        
      </div>
    </div>
  );
});
