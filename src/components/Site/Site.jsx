import React, { useState } from "react";
import Animations from "./Animations";

const Site = (props) => {
    const handleAnimationEnd = (spawn$) => {
        console.log('i finished')
    }
    return (
    <div class="grid justify-items-center">

      <Animations onAnimationEnd={handleAnimationEnd}/>
    </div>
  );
};
export default Site;
