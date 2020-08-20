function highestRank(arr) {
  //Your Code logic should written here
  let rv = {};
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = rv[0];
    console.log(rv);
  }

  // for (let i = 0; i < arr.length; ++i) {
  //   if()
  // }
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
