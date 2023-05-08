import { useState } from "react";
import withCounter from "./withCounter";

function ClickIncrease(props) {
  const { counter, incrementCounter, increaseCount } = props;

  return (
    <div>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={() => incrementCounter()}>
        Increase with click
      </button>
      <p style={{ fontSize: counter }}>Size of font in onClick function: {counter}</p>
      <p>Value of 'counter' in ClickIncrease: {counter}</p>
      <p>Value of 'name' in ClickIncrease: {props.name}</p>
      <p>increaseCount: {increaseCount}</p>
      <p style={{ fontSize: 30 }}>secretWord: {props.secretWord}</p>
    </div >
  );
}

export default withCounter(ClickIncrease, 3);
