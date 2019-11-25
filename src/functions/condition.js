const Condition = (data) => {
  let vitaminsArr = data.split(" ").map((vitamin) => {
    return {
      name: vitamin.split("")[0],
      color:  vitamin.split("")[1]
    }
  });
  let colours = ["W", "G", "B"];
  let sum = 3;
  let finds = vitaminsArr[0].color;
  let max = vitaminsArr.length+2;
  let results = 'W';
  let filters = colours.filter((color) => finds && color !== results);
  let arrResult = [];
  if (vitaminsArr[vitaminsArr.length-1].color !== undefined) {
    return condition(max, sum, finds, filters, results);
  }
  return arrResult;
};
const condition = (max, sum, finds, filters, arrResult, moves=[]) => {
  if (sum === max) {
    moves.push([sum, finds, arrResult]);
  }
  else {
    condition(max, sum+1, finds, arrResult, filters, moves);
    moves.push([sum, finds, arrResult]);
    condition(max, sum+1, filters, finds, arrResult, moves);
  }
  return moves;
};
export default Condition;
