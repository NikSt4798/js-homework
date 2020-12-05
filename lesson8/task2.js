console.log(getMinutesFromStart(new Date()));

export function getMinutesFromStart(date) {
  return date.getHours() * 60 + date.getMinutes();
}
