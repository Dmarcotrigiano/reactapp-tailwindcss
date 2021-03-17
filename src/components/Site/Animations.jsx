import React, { useState, useEffect } from "react";
import Text from "./Text";
const Animations = (props) => {
  let loadedStr = [
    `Created on March 16, 2020`,
    `Utiliziation of TailwindCSS`,
    `Randomized Animations`,
    `Responsive Colors`,
  ];
  function getRan(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const info = [
    "I created this website in one day to practice a new framework!",
    "Hearing about TailwindCSS's Just-In-Time compiling inspired me.",
    "I decided to work on my animations, in the scope of TailwindCSS.",
    "Added some event listeners to monitor the background color and provide responsive contrast!",
  ];
  const styles = "mt-5 text-xl text-center text-blue-400";
  const animations = ["Left", "Top", "Bot"];

  return loadedStr.map((text, index) => {
    return (
      <div class="flex mt-5 box-content justify-center align-center p-3">
        <div class={"container mx-5-auto"}>
          <Text
            text={text}
            style={styles}
            timer={index + 1}
            id={index}
            onAnimationEnd={(e) => props.onAnimationEnd(index, e)}
          />
        </div>
        <div class={"container mx-5-auto"}>
          <p
            class={` ml-2 text-left text-blue-100 animate-spawnText${
              index + 1
            }`}
          >
            {info[index]}
          </p>
        </div>
      </div>
    );
  });
};

export default Animations;

//
