import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import styled, { css, keyframes } from "styled-components";
import "./index.less";

const { Text } = Typography;

// 定义一个闪烁动画
const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

// 定义一个带有动画效果的 span
const AnimatedSpan = styled.span`
  display: inline-block;
  ${({ delay, isPlaceholder, isBlinking }) =>
    isPlaceholder && !isBlinking
      ? css`
          animation: ${blink} 1s step-end infinite ${delay}s;
        `
      : isBlinking
      ? css`
          animation: ${blink} 0.2s step-end infinite;
        `
      : null}
`;

const GPTText = () => {
  // 定义状态变量
  const [text, setText] = useState(""); // 文本内容
  const [currentText, setCurrentText] = useState(""); // 当前显示的文本
  const [currentIndex, setCurrentIndex] = useState(0); // 当前显示到的字符索引
  const [isBlinking, setIsBlinking] = useState(false); // 是否闪烁

  useEffect(() => {
    // 模拟异步加载文本内容
    const loadText = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setText("你好，我是demo的作者:某哈压力大。由于拧螺丝太无聊,所以搓了这个demo。什么?你说喜欢我!那就来wx找我玩吧~记得神秘咒语:hanosong/");
    };

    loadText();
  }, []);

  useEffect(() => {
    // 根据当前索引和文本内容计算出当前显示的文本
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(
          currentIndex === 0
            ? text.charAt(0)
            : text.slice(0, currentIndex) + "_"
        );
        setCurrentIndex(currentIndex + 1);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setIsBlinking(true);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    // 当文本全部显示完毕后，为每个新的字符添加闪烁效果
    if (currentIndex === text.length) {
      const interval = setInterval(() => {
        setCurrentText((prevText) =>
          prevText.endsWith("_") ? prevText.slice(0, -1) : prevText + "_"
        );
      }, 500);
      return () => clearInterval(interval);
    }
  }, [currentIndex, text]);

  return (
    <div className="gpt-text-wrapper">
      <div className="gpt-text-wrapper-fix-width">
      <Text>
        {currentText.split(/([^\p{L},])/u).map((char, index) => {
          if (!/[^\p{L},]/u.test(char)) {
            // 字母或“，”符号，直接渲染
            return <span key={index}>{char}</span>;
          } else {
            // 非字母或非“，”符号，渲染占位符或换行
            return (
              <React.Fragment key={index}>
                {char === " " || char === "," ? (
                  <span>_</span>
                ) : (
                  <React.Fragment>
                    <span>{char}</span>
                    <br></br>
                  </React.Fragment>
                )}
              </React.Fragment>
            );
          }
        })}
      </Text>
      </div>
    </div>
  );
};

export default GPTText;
