import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 1,
  ...props
}) => {
  const Component = wrapperElement;
  const compRef = useRef(null);
  const distance = 200;

  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;

    default:
      fadeDirection = { x: 0 };
      break;
  }

  useEffect(() => {
    // {opacity: 0, y: 100, duration: 1}
    gsap.from(compRef.current, {
      ...fadeDirection,
      opacity: 0,
      delay: delay
    });
  }, [compRef, delay, fadeDirection]);

  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeInAnimation;
