import React, { useState, useEffect } from "react";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const loadedStr = [
    `Welcome to Site`,
    `Site Info is Here`,
    `More Site Info`,
    `Last Site Info`,
  ];
  const [styles, setStyles] = useState("text-xl ");
  const animations = [Left, Top, Bot];
  function handleLoad() {
    loaded === true &&
      setStyles(styles + `"spawn"${animations[Math.floor(Math.random() * 3)]}`);
  }
  useEffect(() => {
    setLoaded(true);
    handleLoad();
  }, []);
  return loadedStr.map((text) => {
    <p class={styles}>{text}</p>;
  });
};
