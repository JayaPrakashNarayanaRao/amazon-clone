import {formatCurrency} from '../scripts/utils/money.js';

if(formatCurrency(2095) === '20.95'){
  console.log('Test 1 passed');
} else{
  console.log('Test 1 failed');
}