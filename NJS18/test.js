
const tipCalculator = (sum, percentage, currency, prefix) => {/* pass data to the function, define the variable inside the 
    function as parameters*/

    let tip = sum * (percentage/100);
    let total = sum + tip;

// adding currency to end of the value. ex: 29.25LKR
    if (prefix) {
        console.log(`
            sum before tip: ${currency}${sum}
            tip percentage: ${percentage}%
            tip: ${currency}${tip.toFixed(2)}
            total: ${currency}${total.toFixed(2)}
            `);  
    } else{
        console.log(`
            sum before tip:${sum}${currency}
            tip percentage: ${percentage}%
            tip: ${tip.toFixed(2)}${currency}
            total: ${total.toFixed(2)}${currency}
            `); 
    }
    
};

tipCalculator(29.95, 18, "LKR", false); // if you want to add currency into the front change the statement as true.