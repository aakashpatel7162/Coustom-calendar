import React, { useState } from "react";
import moment from "moment";
import "./styles.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");
  const daysInMonth = currentMonth.daysInMonth();
  const startDay = startOfMonth.day();

  const prevMonth = () =>
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  const nextMonth = () => setCurrentMonth(currentMonth.clone().add(1, "month"));

  const days = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = currentMonth.clone().date(d).isSame(moment(), "day");
    const isWeekend = [0, 6].includes(currentMonth.clone().date(d).day());

    days.push(
      <div
        key={d}
        className={`day ${isToday ? "today" : ""} ${
          isWeekend ? "weekend" : ""
        }`}
      >
        {d}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentMonth.format("MMMM YYYY")}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days-grid">{days}</div>
    </div>
  );
};

export default Calendar;
