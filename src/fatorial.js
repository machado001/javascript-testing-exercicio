class Fatorial {
   execute(n) {
    if (!(n >= 0)) {
      return "NOT POSITIVE INTEGER";
    }
    if (n === 1 || n === 0) {
      return 1;
    }
    return n * this.execute(n - 1);
  }
}

module.exports = Fatorial;
