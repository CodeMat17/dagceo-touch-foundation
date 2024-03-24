"use client";

import { TypeAnimation } from "react-type-animation";

const HeroTextAnimation = ({ text_1, text_2, text_3, text_4 }: any) => {
  return (
    <TypeAnimation
      splitter={(str: any) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
      sequence={[text_1, 5000, text_2, 5000, text_3, 5000, text_4, 5000, ""]}
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      //   omitDeletionAnimation={true}
      //   style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
      repeat={Infinity}
    />
  );
};

export default HeroTextAnimation;
