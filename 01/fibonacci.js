function fibonacci(n) {
  let first = 1, second = 0, temp;

    while (n >= 1) {
      temp = first;
      first = first + second;
      second = temp;
      n--;
    }

    return second;
}