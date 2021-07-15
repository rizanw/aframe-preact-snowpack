import { h } from "preact";
import { Entity, Scene } from "aframe-react";

import ImgGround from "./assets/ground.jpg";
import ImgSky from "./assets/sky.jpg";

export default function App() {
  return (
    <Scene>
      <a-assets>
        <img crossOrigin id="groundTexture" src={ImgGround} />
        <img crossOrigin id="skyTexture" src={ImgSky} />
      </a-assets>

      <Entity
        primitive="a-sky"
        height="2048"
        radius="30"
        src="#skyTexture"
        theta-length="90"
        width="2048"
      />
      <Entity
        primitive="a-plane"
        src="#groundTexture"
        rotation="-90 0 0"
        height="100"
        width="100"
      />

      <Entity
        text={{ value: "Hello Virtual World!", align: "center" }}
        position={{ x: 0, y: 2, z: -1 }}
      />
    </Scene>
  );
}
