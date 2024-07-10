
const formatter = (local, currency, value) => {
    let formattedValue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency,
        }).format(value);
    return formattedValue;
};


const tipCalculator = (sum, percentage, local, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    console.log(`
        Sum before tip: ${formatter(local, currency, sum)}
        Tip percentage: ${percentage}%
        Tip:            ${formatter(local, currency, tip)}
        Total:          ${formatter(local, currency, total)}
      `);
  };
  
  tipCalculator(29.95, 18, "de-DE", "EUR");

  /* using the return keyword, we can pass information back and forth between 
  different function, and use function again and again to do different things like in this example
  where we're using formatter function three times inside tip calculator function to get different result
  for different purposes. */