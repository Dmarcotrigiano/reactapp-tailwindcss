import React, { useState, useEffect } from "react";
import Text from './Text';
const Site = () => {
  const [loaded, setLoaded] = useState(0);
  let loadedStr = [
    `Welcome to the Site`, `Site Info is Here`, `More Site Info`, `Last Site Info`
  ];
  function getRan(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const styles  = 
    "mt-5 text-xl text-center text-blue-400"
  ;


  const animations = ["Left", "Top", "Bot"];

  const ranAnimation =  getRan(animations);

  return loadedStr.map((text, index) => {
    return (
        <Text text={text} style={styles}  timer={index+1} id={index} ranAnimation={ranAnimation} />
    );
  });
};

export default Site;

//