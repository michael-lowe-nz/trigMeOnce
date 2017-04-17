import { trigCalculator } from 'trigonometry-calculator';

let unsolvedTriangle = {
  angles: { 2: 117 },
  sides: { 0: 6.9, 1: 2.6 }
}

console.log('Result', trigCalculator(unsolvedTriangle))
