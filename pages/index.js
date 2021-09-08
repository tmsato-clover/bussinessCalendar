import React, { useState } from "react"; // useStateを追加
import eachDayOfInterval from "./date-fns/eachDayOfInterval";
import endOfWeek from "./date-fns/endOfWeek";
import eachWeekOfInterval from "./date-fns/eachWeekOfInterval";
import startOfMonth from "./date-fns/startOfMonth";
import endOfMonth from "./date-fns/endOfMonth";

const getCalendarArray = (date) => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });
  return sundays.map((sunday) =>
    eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
  );
};

function App() {
  // const [targetDate, setTargetDate] = useState(new Date())  // 変更
  // const calendar = getCalendarArray(targetDate)

  return <div> テーマ編集画面でカレンダーの設定を行ってください </div>;
}

export default App;
