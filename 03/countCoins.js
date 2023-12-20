function countCoins(sum, coins) {
  const coinsSorted = coins.sort((a, b) => b - a);
  const result = [];
  let sumLeft = sum;
  let selectedCoin = 0;
  let lowestRemainder = Number.MAX_SAFE_INTEGER;

  while (true) {
    if (sumLeft === 0) {
      return result;
    }

    if (sumLeft < 0) {
      return [];
    }

    coinsSorted.forEach(coin => {
      const remainder = sumLeft % coin;

      if (remainder < lowestRemainder && coin > 1) {
        lowestRemainder = remainder;
        selectedCoin = coin;
      }
    });

    if (sumLeft - selectedCoin < 0) {
      const lowestCoin = coinsSorted.filter(coin => coin <= 1);

      lowestCoin.forEach(coin => {
        const remainder = sumLeft % coin;

        if (remainder < lowestRemainder) {
          lowestRemainder = remainder;
          selectedCoin = coin;
        }
      });
    }
    result.push(selectedCoin);
    sumLeft -= selectedCoin;
  }
}