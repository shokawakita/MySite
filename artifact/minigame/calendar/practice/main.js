'use strict';


{

  const year = 2020;
  const month = 4; // 5月

  function getCalendarHead(){
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for(let i = 0; i < n; i++){
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }
  function getCalendarBody(){
    const dates = [];
    const n = new Date(year, month + 1, 0).getDate();

    for(let i = 1; i < n + 1; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }
    return dates;
  }

  function getCalendarTail(){
    const dates = [];
    const n = new Date(year, month + 1, 0).getDay();

    for(let i = 1; i < 7 - n; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  function createCalendar() {
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;
    
    for(let i = 0; i < weeksCount; i++){
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');
        td.textContent = date.date;
    
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    });
    
  }

  createCalendar();

}