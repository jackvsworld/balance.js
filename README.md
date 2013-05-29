balance.js
==========

Simple JavaScript library for balancing accounts.

Creating a simple balance sheet:

    var jack = new Balance();
    jack.balance(-2000, "salary"); // 2000
    jack.balance(100, "food");     // 1900
    jack.balance(50, "leisure");   // 1850
    jack.balance(50, "transit");   // 1800
    jack.balance(650, "rent");     // 1150
    jack.accounts; // {: 1150, salary: -2000, food: 100, leisure: 50, transit: 50, rent: 650}

Using jQuery to format the results:

    $.each(jack.accounts, function (a, x) { document.write(x + " " + a); });
    // 1150 
    // -2000 salary
    // 100 food
    // 50 leisure
    // 50 transit
    // 650 rent

Finding the net volume of all accounts:

    var volume = $.map(jack.accounts, function (x) { return Math.abs(x); }); // [1150, 2000, 100, 50, 50, 650]
    volume.reduce(function (x, y) { return x + y; }) / 2;                    // 2000

The sum of the accounts always balances to zero:

    var totals = $.map(jack.accounts, function (x) { return x; }); // [1150, -2000, 100, 50, 50, 650]
    totals.reduce(function (x, y) { return x + y; });              // 0
