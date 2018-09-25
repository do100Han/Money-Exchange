// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var cent = { 'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1 },
        change = {};
    if (currency <= 0) {
        return change;
    }
    else if (currency > 10000) {
        change['error'] = "You are rich, my friend! We don\'t have so much coins for exchange"
        return change;
    }
    else {
        for (var key in cent) {
            var match = currency / cent[key];
            match = Math.floor(match);
            if (match !== 0) {
                var currency = currency - match * cent[key];
                change[key] = match;
            }
        }
        return change;
    }
}
