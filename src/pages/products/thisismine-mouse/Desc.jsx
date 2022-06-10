import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div>
      ThisIsMine Mouse is a virtual mouse device installed on Android device
      (min. v. 2.1) and controlling Windows operating system (min. XP SP2, both
      32-bit &amp; 64-bit). It uses WiFi (UDP/IP) or Bluetooth for
      communication. Server software can work in one of two modes: using HID
      minidriver (only 32-bit OS or 64-bit Windows XP), simulating mouse
      messages (process requires administrator privileges). There are two main
      components: <br />
      <ul>
        <li>Android&nbsp; application,</li>
        <li>Server software that runs on Windows operating system.</li>
      </ul>
      <p
        name="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        Server software consists of:
      </p>
      <ul>
        <li>HID mini driver,</li>
        <li>Proxy process running elevated and simulating mouse messages,</li>
        <li>WindowsTM service,</li>
        <li>Service configuration utility.</li>
      </ul>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        &nbsp;ThisIsMine Mouse can communicate with the server using:{" "}
      </p>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        &nbsp;
      </p>
      <ul>
        <li>
          WiFi network{" "}
          <span style={{ color: "rgb(51, 102, 255)" }}>
            <span style={{ fontStyle: "italic" }}>
              (Note: server software can automatically configure Firewall to
              open used communication port (UDP protocol). Otherwise it is
              required to open such port manually. Default port is 1701.)
            </span>
          </span>
          ,&nbsp;
        </li>
        <li>
          Bluetooth radio{" "}
          <span style={{ color: "rgb(51, 102, 255)" }}>
            <span style={{ fontStyle: "italic" }}>
              (Note: Windows Bluetooth stack is required on Windows)
            </span>
          </span>
          ,&nbsp;
        </li>
      </ul>
      <p
        className="MsoNormal"
        style={{ lineHeight: "normal", marginBottom: "0pt" }}
      >
        &nbsp;
        <NavLink to="res">Server software can be downloaded here</NavLink>
      </p>
    </div>
  );
};
