# Artjoker_task

## Description

Implementation of a test task for parsing a promotional code for recharging an account.

The mainFunc function takes an initial value and returns the result as 2000, 1000, 100, 0.
The checkAndCountDigits function takes the initial value and returns the number of digits in the promotion code.

The digitToArray function accepts a provable number and returns the number of digits.
The isPromo1000Or2000 function accepts a validated number and returns 2000 or 1000 if successful

The isPromo100OrInvalid function accepts a validated number and returns 100 or 0 on success

## USING
A promo code must be passed to the mainFunc function for verification. If the promotion code is invalid, the function will return 0. If the promotion code is valid, it will return the result.

In the case of unobvious pairs, I always use the first of the possible pairs.

## DETAILS
To check I used promotional code from the test task. I also used a few others: 33077055, 13932355
Since I do not know where will be built this algorithm and in what form will be the incoming promotional code, I wrote an algorithm on the assumption that the starting zero is reduced

For example promotional code 03932350 will be transformed by rules of mathematics to number 3932350 and will become non-valid.
