const transpose = function(matrix) {
  // Replace this code with your solution
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  let result = [];

  for (let i = 0; i < numCols; i++) {
    // column
    result.push([]);
    for (let j = 0; j < numRows; j++) {
      //row
      result[i][j] = matrix[j][i];
    }
  }

  return result;

};

module.exports = transpose;
