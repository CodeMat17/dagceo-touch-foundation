"use client";

import { TypeAnimation } from "react-type-animation";

const HeroTextAnimation = () => {
  return (
    <TypeAnimation
      splitter={(str: any) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
      sequence={[
        "Transforming compassion into action for a more equitable world... ",
        5000,
        "Generosity is the heartbeat of humanity, echoing kindness and healing wounds. ",
        5000,
        "In the tapestry of life, acts of compassion are the golden threads that bind us all. ",
        5000,
        "Caring hands create ripples of love, touching lives in ways we may never fully comprehend.",
        5000,
        "",
      ]}
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
    //   omitDeletionAnimation={true}
    //   style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
      repeat={Infinity}
    />
  );
};

export default HeroTextAnimation;