const addDateSuffix = (date) => {
  const lastDigit = date % 10;
  const suffix = (lastDigit === 1 && date !== 11)
    ? 'st'
    : (lastDigit === 2 && date !== 12)
    ? 'nd'
    : (lastDigit === 3 && date !== 13)
    ? 'rd'
    : 'th';
  return `${date}${suffix}`;
};
const getFormattedTimestamp = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
  ) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dateObj = new Date(timestamp);
  const formattedMonth = monthLength === 'short'
    ? months[dateObj.getMonth()].slice(0, 3)
    : months[dateObj.getMonth()];

  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  const year = dateObj.getFullYear();
  let hour = dateObj.getHours() > 12
    ? dateObj.getHours() - 12
    : dateObj.getHours();
  hour = hour === 0 ? 12 : hour;
  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
};

module.exports = getFormattedTimestamp;