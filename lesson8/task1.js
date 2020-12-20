export function getDayOfTheWeek(dateString) {
  const [day, month, year] = dateString.split(".");

  console.log(day, month, year);

  const date = new Date(`${year}-${month}-${day}`);

  return getDayOfTheWeekString(date);
}

function getDayOfTheWeekString(date) {
  const day = date.getDay();

  console.log(date, day);

  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}
