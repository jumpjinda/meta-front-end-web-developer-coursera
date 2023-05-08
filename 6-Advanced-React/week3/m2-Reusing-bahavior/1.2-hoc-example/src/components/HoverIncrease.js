import { useState } from "react";
import withCounter from "./withCounter.js";

function HoverIncrease(props) {
  const { counter, incrementCounter, increaseCount } = props;

  return (
    <div>
      {/*Use the incrementCounter method to increment the 'counter' state..*/}
      <button onMouseOver={() => incrementCounter()}>Increment counter</button>
      <p style={{ fontSize: counter }}>Size of font in onMouseOver function: {counter}</p>
      <p> Value of 'counter' in HoverIncrease: {counter}</p>
      <p>Value of 'name' in HoverIncrease: {props.name}</p>
      <p>increaseCount: {increaseCount}</p>
    </div>
  );
}

export default withCounter(HoverIncrease, 10);
