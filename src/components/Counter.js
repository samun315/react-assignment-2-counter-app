import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    setCount(count + 1);
  };

  const decrementHandle = () => {
    setCount(count - 1);
  };

  const resetCOuntHandle = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={incrementHandle}
            disabled={count === 5 ? true : false}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={decrementHandle}
            disabled={count === -5 ? true : false}>
            -
          </button>
          <button className="btn card__btn" onClick={resetCOuntHandle}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
