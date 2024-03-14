import{formatCurrency} from "../scripts/utils/money.js";

console.log('test suite: formatCurreny');

console.log('converts cents into dollars')
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} 
else { 
  console.log('failed')
};

console.log('works with a 0')
if (formatCurrency(0) === '0.00') {
  console.log('passed')
} 
else {
  console.log('failed')
}

console.log('rounds up to the nearest cent')
if (formatCurrency(2000.4) === ('20.00')) {
  console.log('passed')
} 
else {
  console.log('failed')
}