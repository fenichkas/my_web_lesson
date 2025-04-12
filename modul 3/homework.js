 alert( null || 2 || undefined ); //2

alert( alert(1) || 2 || alert(3) ); //1,2,3

alert( 1 && null && 2 ); //1,2

alert( alert(1) && alert(2) ); //1,2

alert( null || 2 && 3 || 4 ); //23,4

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value); //10, value, 30, value