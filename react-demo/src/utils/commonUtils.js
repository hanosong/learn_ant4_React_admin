import { dayMapping } from "./date";
// 日历组件：根据选中的日子推到选中的那一个星期的数据
/**
 * 
 * @param weekMsg state.weekMsg
 * @param _weekDays getWeekDates 计算出来的星期一到星期日的日期
 * @returns [{day: '周一', date: '05/11'}]
 */
export const findDateToWeek = (weekMsg = {}, _weekDays) => {
    let _weekDay = [...weekMsg];
    for(const [key, val] of Object.entries(_weekDays)){
      const targetDate = _weekDay.find((item) => item['day'] === dayMapping[key]);
      if(targetDate){
        targetDate.date = val
      }
    }
    return _weekDay;
}