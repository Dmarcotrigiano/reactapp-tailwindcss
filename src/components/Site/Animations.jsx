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
  const info = ['this is the first piece of info', 'second piece of info', 'third piece of info', 'last piece of info']
  const styles = "mt-5 text-xl text-center text-blue-400";
  const animations = ["Left", "Top", "Bot"];


  return loadedStr.map((text, index) => {
    return (
      <div class="flex mt-5 box-content justify-center align-center p-3">
        <div class={'container mx-5-auto'} >
        <Text
          text={text}
          style={styles}
          timer={index + 1}
          id={index}
          onAnimationEnd={props.onAnimationEnd}
        />
        </div>
        <div class={'container mx-5-auto'}>
        <p class={` ml-2 text-left text-blue-100 animate-spawnText${index+1}`}>{info[index]}</p>
        </div>
      </div>
    );
  });
};

export default Animations;

//
