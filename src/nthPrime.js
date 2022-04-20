import React from "react";

const NthPrime = () => {
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const primeArr = () => {
    var arr = [2],
      count = 1,
      n = 100,
      target = 4;
    for (var i = 3; i < n; i += 2) {
      if (isPrime(i)) {
        arr.push(i);
        count++;
      }
      if (count === target) {
        console.log(`${target}th prime number of is ${i}`);
        break;
      }
    }
    console.log(arr); // use arr result on your own
    console.log(count);
  };

  return (
    <div>
      <h2>
        <i>Nth Prime Component</i>
      </h2>
      <input type="number" placeholder="Enter nth target number" />
      <button onClick={primeArr()}>Get nth Prime</button>
    </div>
  );
};
export default NthPrime;
