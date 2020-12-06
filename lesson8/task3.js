export function defineYoungerUser(firstUser, secondUser) {
  let [day, month, year] = firstUser.split(".");
  const firstDate = new Date(`${year}-${month}-${day}`);
  [day, month, year] = secondUser.split(".");
  const secondDate = new Date(`${year}-${month}-${day}`);

  console.log(firstDate > secondDate);

  return firstDate < secondDate
    ? "Second user is younger"
    : "First user is younger";
}
