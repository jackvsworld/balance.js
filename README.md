balance.js
==========

Simple JavaScript library for balancing accounts.

http://jsfiddle.net/PDNje/

Usage
-----

Referencing the library:

    <script src="//test.smithcart.com/js/balance.js"></script>

Examples
--------

Creating a simple balance sheet:

    var jack = new Balance();
    jack.balance(-2000, "salary");  // 2000
    jack.balance(100, "food");      // 1900
    jack.balance(50, "leisure");    // 1850
    jack.balance(50, "transit");    // 1800
    jack.balance(650, "rent");      // 1150

Using jQuery to format the results:

    $.each(jack.accounts, function (a, x) { document.write(x + " " + a); });
    // 1150 
    // -2000 salary
    // 100 food
    // 50 leisure
    // 50 transit
    // 650 rent

Getting the balance of an account:

    jack.accounts.food;             // 100

The `balance` method returns the leftover balance:

    jack.balance();                 // 1150
    jack.balance(100, "charity");   // 1050

The sum of all the accounts is always equal to zero:

    $.map(jack.accounts, function (x) {
        return x;
    }).reduce(function (x, y) { return x + y; });       // 0

Take the absolute value of each account and divide it in half:

    $.map(jack.accounts, function (x) {
        return Math.abs(x);
    }).reduce(function (x, y) { return x + y; }) / 2;   // 2000
