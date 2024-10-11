const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export const getFormatDate = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getUTCDay();
  const month = dateObj.getUTCMonth();
  const year = dateObj.getUTCFullYear();

  return `${day} ${months[month]} ${year}`;
};
