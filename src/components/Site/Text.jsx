import React, { useState, useEffect } from "react";

const Text = (props) => {
  
  function getRan(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const animations = ["Left", "Top", "Bot"];
  let timer = props.timer;
  let ran = getRan(animations);

  return (
    <p onAnimationEnd={props.onAnimationEnd(props.id,props.e)} class={`${props.style} animate-spawn${ran}${timer}`}>{props.text}</p>
  );
};
export default Text;
