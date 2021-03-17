import React, { useState } from "react";
import Animations from "./Animations";

const Site = (props) => {
    const [finished, setFinished] = useState(false)
    const handleAnimationEnd = (spawn$) => {
        setFinished(true);
    }

    return (
    <div class="grid justify-items-stretch">

      <Animations onAnimationEnd={handleAnimationEnd}/>
    </div>
  );
};
export default Site;
