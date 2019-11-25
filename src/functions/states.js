import { transforms, colors } from './functions.js';
export const states = (data, operators) => {
  let vitaminsArr = transforms(data);
  const statesArr = [data];
  const arr = operators.map( operation => colors(vitaminsArr[operation[0] - 3], operation[2], vitaminsArr ));
  arr.forEach(item => {
    let stringArr = item.map(obj => `${obj.name}${obj.color}`);
    statesArr.push(stringArr.join(' '));
  });
  return statesArr;
};
