export function getCurrentDate() {
  let today = new Date();
  const currentDate =
    getYear(today) + "-" + getMonth(today) + "-" + getDay(today);
  return currentDate;
}

function getMonth(date) {
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  return mm;
}
function getDay(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  return dd;
}
function getYear(date) {
  var yyyy = date.getFullYear();
  return yyyy;
}
