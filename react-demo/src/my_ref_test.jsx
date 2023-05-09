import { Button } from "antd";
import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useRef } from "react";

const myRefTest = memo((props) => {
  const myRef = useRef();
  useEffect(() => {
    myRef.current = {
      name: "haha",
      age: 18,
    };
  }, []);
  const changeRefHandle = () => {
    const _ref = myRef.current;
    _ref.name = "buger";
    console.log(_ref, "_ref");
    console.log(myRef.current, "myRef.current");
  };
  return (
    <div>
      <div>refs</div>
      <div>
        <Button onClick={changeRefHandle} type="primary">
          获取ref
        </Button>
      </div>
    </div>
  );
});

myRefTest.propTypes = {};

export default myRefTest;
