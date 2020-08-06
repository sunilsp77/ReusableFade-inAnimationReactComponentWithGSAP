import React from "react";

import "./styles.css";
import FadeInAnimation from "./FadeInAnimation";

export default function App() {
  return (
    <div>
      <FadeInAnimation wrapperElement="h1" direction="down">
        Hello CodeSandbox
      </FadeInAnimation>
      <FadeInAnimation wrapperElement="h2" direction="right" delay={2}>
        Start editing to see some magic happen!
      </FadeInAnimation>
      <FadeInAnimation
        style={{
          width: 200,
          color: "white",
          height: 200,
          backgroundColor: "purple"
        }}
        direction="up"
      >
        <p>Hello</p>
      </FadeInAnimation>
    </div>
  );
}
