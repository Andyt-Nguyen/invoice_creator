export const totalHoursPassed = (startTime, endTime, startDate, endDate) => {
  let hours = 0;
  const startHrs = Number(startTime.slice(0, 2));
  const startMin = Number(startTime.slice(-2));
  const endHrs = Number(endTime.slice(0, 2));
  const endMin = Number(endTime.slice(-2));

  if (startDate === endDate) {
    const diffHrs = endHrs - startHrs;
    hours = diffHrs
  }
  else if (endDate > startDate) {
    const dayMultiplier = Number(endDate.slice(-2)) - Number(startDate.slice(-2));
    const diffDayOne = (24 * dayMultiplier) - startHrs;
    const diffDayTwo = (24 * dayMultiplier) + endHrs;
    const sumOfTwoDays = diffDayOne + diffDayTwo;
    hours = sumOfTwoDays - (24 * dayMultiplier);
  }
  const diffMin = endMin > startMin
    ? endMin - startMin
    : startMin - endMin;
  
  if(hours < 0) {
    return 0;
  }

  return `${hours}.${diffMin < 10 ? 0 : ''}${diffMin}`;
};
