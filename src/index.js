// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    let error = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    let value = [
        {"H": 50},
        {"Q": 25},
        {"D": 10},
        {"N": 5},
        {"P": 1}
    ];

    //let currency = currency;

    if(currency > 10000) {
        return error;
    }

    for (let i = 0; i < value.length; i++) {
        let coinName = Object.keys(value[i])[0];
        let number = Object.values(value[i])[0];
        console.log(currency / number);
        if ((currency / number) < 1) continue;

        let objValue = Math.floor(currency / number);
        currency = currency % number;
        result[coinName] = objValue;

        if (currency === 0) break;
    }

    /* value.forEach(function (item) {
         let coinName = Object.keys(item)[0];
         let number = Object.values(item)[0];
         if ((currency / item) < 1) continue;


         let objValue = Math.floor(currency / number);
         currency = currency % number;
         console.log(currency);
         result[coinName] = objValue;
     });*/
    console.log('result', result);

    return result;
};
