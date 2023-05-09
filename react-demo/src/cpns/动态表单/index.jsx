import React, { memo, useEffect, useState } from "react";
import { Button } from "antd";

const Index = memo(() => {
  const [count, setCount] = useState({
    test1: 0,
    test2: 0,
  });
  const [tes, settes] = useState(0);

  const clickHandle = () => {
    setCount((count) => ({
      ...count,
      test1: Math.random(),
    }));
  };

  const clickHandle_2 = () => {
    setCount((count) => ({
      ...count,
      test2: 1,
    }));
  };
function fn (){
  x = 1
  fn1(xx)
}
  useEffect(() => {
    console.log(1);
  }, [count.test1]);
  return (
    <div>
      {count.test1}
      <Button onClick={clickHandle}>+++</Button>
      <Button onClick={clickHandle_2}> ???? </Button>
    </div>
  );
});

export default Index;
