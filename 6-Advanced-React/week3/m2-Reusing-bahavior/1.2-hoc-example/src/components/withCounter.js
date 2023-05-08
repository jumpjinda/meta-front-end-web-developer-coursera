import React from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {
  function NewComponent(props) {
    const [counter, setCounter] = React.useState(10); //create a Hook

    //render OriginalComponent and pass on its props.
    return (
      <OriginalComponent
        {...props}
        name="JumpJinda"
        counter={counter} //export our counter Hook
        increaseCount={increaseCount}
        incrementCounter={() => setCounter((size) => size + increaseCount)}
      />);
  }
  return NewComponent;
};

export default UpdatedComponent;
