

const Counter = ({counter, onIncrement, onDecrement}) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{counter}</p>
      <button className="counter-button" onClick={onDecrement}>-</button>
      <button className="counter-button" onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
