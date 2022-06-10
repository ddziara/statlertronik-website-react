import * as React from "react";
import statlertronikImage from "../images/statlertronik.jpg";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <img
          src={statlertronikImage}
          alt="Statlertronik image"
          className="statlertronik-img"
        />
        <article className="about">
          <h4>About</h4>
          <p>
            <big>
              <span style={{ fontWeight: "bold" }}>Statlertronik </span>
            </big>
            is a sole proprietorship founded in 2010 and run by Dariusz Dziara,
            a software developer (C, C++, C#, Java<sup>TM</sup>, Windows
            <sup>TM</sup>) for a long time who worked for German company Video
            Technologien GmbH, polish stocks exchange company Relpol S.A. and
            also was 7th expert in C++ area on Experts Exchange (network for
            technology professionals) in 2006, earlier he was Microsoft
            certified professional in area of Windows operating systems &amp;
            networking. Now goal of Statlertronik is to supply nice apps based
            on physics simulation, sensor usage &amp; 3D graphics for mobile
            devices like smartphones &amp; tablets, powered by Android
            <sup>TM</sup>.
          </p>
        </article>
      </div>
    </div>
  );
};
