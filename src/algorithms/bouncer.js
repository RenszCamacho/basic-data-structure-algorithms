// Falsy Bouncer
/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. 
*/
const bouncer = (arr) => arr.filter((e) => (e ? e : null));

const result = bouncer([false, null, 0, NaN, undefined, ""]);

console.log(result);
