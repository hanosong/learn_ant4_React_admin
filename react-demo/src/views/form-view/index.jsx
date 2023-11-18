import React, { memo, useCallback, useEffect, useState } from "react";
import "./index.less";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import CalendarTable from "@/components/calendar-table";
import {dayMapping} from '@/utils/date';
import {findDateToWeek} from '@/utils/commonUtils';
import dayjs from "dayjs";


import { Button } from "antd";
const FormView = memo(() => {
  const [datePicVal, setDatePicVal] = useState(dayjs());
  const dateChangHanle = (v) => {
    setDatePicVal(dayjs(v));
  }

  useEffect(() => {
    let _WeekDates = getWeekDates(dayjs())
    setWeekDay(() =>  findDateToWeek(weekDay, _WeekDates))
  },[])

  useEffect(() => {
    let _WeekDates = getWeekDates(datePicVal);
    setWeekDay(() =>  findDateToWeek(weekDay, _WeekDates))
  }, [datePicVal])

  const getWeekDates = useCallback((nowDate) => {
    // 计算星期一到星期日的日期
    const mondayDate = nowDate.startOf('week').add(1, 'day');
    const tuesdayDate = mondayDate.add(1, 'day');
    const wednesdayDate = mondayDate.add(2, 'day');
    const thursdayDate = mondayDate.add(3, 'day');
    const fridayDate = mondayDate.add(4, 'day');
    const saturdayDate = mondayDate.add(5, 'day');
    const sundayDate = mondayDate.add(6, 'day');
    return {
      monday: mondayDate.format('MM/DD'),
      tuesday: tuesdayDate.format('MM/DD'),
      wednesday: wednesdayDate.format('MM/DD'),
      thursday: thursdayDate.format('MM/DD'),
      friday: fridayDate.format('MM/DD'),
      saturday: saturdayDate.format('MM/DD'),
      sunday: sundayDate.format('MM/DD')
    };
  },[])
  const [weekDay, setWeekDay] =useState([
    {
      day: '周日',
      date: null,
    },
    {
      day: '周一',
      date: null,
    },
    {
      day: '周二',
      date: null,
    },
    {
      day: '周三',
      date: null,
    },
    {
      day: '周四',
      date: null,
    },
    {
      day: '周五',
      date: null,
    },
    {
      day: '周六',
      date: null,
    },
  ]) 


  return (
    <div className="content-wrapper">
      <div className="logging-user">当前登录用户:haha</div>
      <div className="inner-wrapper">
        <div className="date-wrapper">
          <Calendar onChange={dateChangHanle} value={datePicVal}/>
        </div>
        <div className="week-day-wrapper">
        {weekDay.map((item, index) => (
          <CalendarTable {...item} key={index}/>
        ))}
        </div>
      </div>
      
    </div>
  );
});

export default FormView;
