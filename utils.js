function formatNum(num) {
  // format number 1000000 to 1,234,567
  //\D means replace all chars that arent numbers. Im replacing commas instead
  // return num.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatValue(val) {
  if (!val) {
    return;
  }
  let currency;
  val = val.toString();
  // check for decimal
  if (val.indexOf('.') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal = val.indexOf('.');

    // split number by decimal point
    var left = val.substring(0, decimal);
    var right = val.substring(decimal);

    // add commas to left side of number
    left = formatNum(left);

    // validate right side
    // Limit decimal to only 2 digits
    // join number by .
    currency = left + '.' + right.slice(1);
    return currency;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    currency = formatNum(val);
    return currency;
  }
}
const formatCurrency = (val) => {
  if (!val) {
    return val;
  }
  return formatValue(val);
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const formatDate = (date) => {
  if (!date) return;
  const d = new Date(date);

  const year = d.getFullYear(); // 2019
  const dateNum = d.getDate(); // 23
  const monthName = months[d.getMonth()];
  // const dayName = days[d.getDay()]; // Thu

  const formattedDate = `${dateNum} ${monthName} ${year}`;

  return formattedDate;
};

module.exports = {
  formatCurrency,
  formatDate,
};
