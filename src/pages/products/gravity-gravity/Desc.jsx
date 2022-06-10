import React from "react";
import Image005 from "../../../images/products/gravity-gravity/desc/image005.jpg";
import Image006 from "../../../images/products/gravity-gravity/desc/image006.jpg";
import Image007 from "../../../images/products/gravity-gravity/desc/image007.jpg";

export default () => {
  return <div><p><span style={{color: "rgb(255, 102, 0)"}}><big><big>Gravity!
  Gravity!</big></big></span> is a simple
  game. All you need to do is to throw the ball in
  the gate. Standard number of points you get for
  this is 1 but it can be increased by throwing
  faster. If you place there all standard balls
  you are rewarded by an extra ball and then next
  extra ball and so on. Number of base points for
  consecutive extra balls increases and it can be
  also multiplied by faster throwing. There are
  also black holes which attract the ball. When a
  black hole devours the ball it increases its
  mass and it attracts more. You can blow up the
  ball when explode button appears. Note that the
  very explosion is usually delayed. There is
  limited time for completion of each level. To
  get to the next level you need to throw in
  required number of balls.</p>
   <p><big><big><span style={{fontWeight: "bold"}}>L</span></big></big>evel
  Info Panel</p>
  <img title="Physcics Simulation Game for Android
  Info Pane" alt="Physcics Simulation Game for
  Android Info Pane"
  src={Image005} /><br/>
  <br/>
  <span style={{fontWeight: "bold"}}>top row left</span>
  - current level number,<br/>
  <span style={{fontWeight: "bold"}}>top row right</span>
  - game score,<br/>
  <span style={{fontWeight: "bold"}}>left column</span>
  - number of balls to throw in to unlock a next
  level,<br/>
  <span style={{fontWeight: "bold"}}>middle row</span>
  - remaining number of standard balls including
  current one (blue color) or extra ball (green
  color),<br/>
  <span style={{fontWeight: "bold"}}>bottom row</span>
  - remaining level time.<br/>
  <br/>
  <p><big><big><span style={{fontWeight: "bold"}}>B</span></big></big>lack
  Hole Panel</p>
  <img title="Physcics Simulation Game for Android
  Black Hole Mass" alt="Physcics Simulation Game
  for Android Black Hole Mass"
  src={Image006} /><br/>
  <br/>
 <span style={{fontSize: "14pt"}} lang="EN-US">current
  mass of a black hole</span><br/>
  <br/>
 <p><big><big><span style={{fontWeight: "bold"}}>E</span></big></big>xplode
  Button<br/>
   <img title="Physcics Simulation Game for Android
  Explode Button" alt="Physcics Simulation Game
  for Android Explode Button"
  src={Image007} /><br/>
  </p>
  </div>;
};

