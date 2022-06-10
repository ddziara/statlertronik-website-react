import React from "react";
import TIMRemoteControlArchitectImg from "../../../images/products/thisismine-remote-control/desc/tim_remotecontrol_architect.jpg"
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div>
      {" "}
      <p
        className="MsoNormal"
        style={{ lineHeight: "normal", marginBottom: "0pt" }}
      >
        ThisIsMine Remote Control is a virtual remote control for Microsoft
        Media Center and other apps (only with HID mini driver on 32-bit version
        of Windows system) on Windows.&nbsp; Remote control app executes on
        Android powered mobile device. It communicates with ThisIsMine Remote
        Control server software executing on Microsoft Windows system (like
        Windows XP <sup>TM</sup>, Windows Vista
        <sup>TM</sup>, Windows 7 <sup>TM</sup>, Windows 8 <sup>TM</sup>, Windows
        8.1 <sup>TM</sup>, ...) using UDP protocol or Bluetooth. When HID
        minidriver is used then messages are translated to Windows hardware
        messages (keyboard &amp; some other HID devices are simulated). When
        Media Center AddIn is used then the messages are sent directly to it
        what means directly to Media Center.
      </p>
      <p
        className="MsoNormal"
        style={{ lineHeight: "normal", marginBottom: "0pt" }}
      >
        <span lang="EN-US">&nbsp;Features:</span>
      </p>
      <ul>
        <li>
          <span lang="EN-US">
            UDP connection (IP address and port need to be configured),
          </span>
        </li>
        <li>
          <span lang="EN-US">
            Bluetooth connection (it is possible to search for all devices and
            then select given Bluetooth device or search only for Bluetooth
            supporting ThisIsMine Bluetooth service which is considerably slower
            operation),
          </span>
        </li>
        <li>
          <span lang="EN-US">
            The 3D remote control object on Android can be shifted and rotated
            and also zoomed in/out,
          </span>
        </li>
        <li>
          <span lang="EN-US">
            Shadows for the 3D remote control object on Android<sup></sup>can be
            turned on/off.
          </span>
        </li>
      </ul>
      <span lang="EN-US">
        <br />
      </span>
      <div style={{ textAlign: "center" }}>
        <span lang="EN-US">
          <img
            title="Remote
                                    Control for Android and Windows
                                    Media Center Multimedia"
            alt="Remote
                                    control for Android and Microsoft
                                    Media Center"
            src={TIMRemoteControlArchitectImg}
          />
        </span>
        <br />
        <span lang="EN-US"></span>
      </div>
      <br />
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        Virtual Remote Control that runs on an Android device and operates Media
        CenterTM on Microsoft Window operating system starting from Windows XP
        SP2. This software can be used to operate also the other Windows
        applications in limited scope, depending on the application. There are
        two main components:
      </p>
      <ul>
        <li>Android&nbsp; app,</li>
        <li>Server software that runs on Windows operating system.</li>
      </ul>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        <span style={{ fontSize: "14pt" }} lang="EN-US">
          &nbsp;
        </span>
      </p>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        Server software consists of:
      </p>
      <ul>
        <li>HID mini driver,</li>
        <li>Media Center AddIn if Media Center 5.0 or newer detected,</li>
        <li>Windows service,</li>
        <li>Service configuration utility.</li>
      </ul>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        &nbsp;
      </p>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        ThisIsMine Remote Control can communicate with the server using:{" "}
      </p>
      <p
        className="MsoListParagraph"
        style={{ margin: "0cm 0cm 0pt", lineHeight: "normal" }}
      >
        &nbsp;
      </p>
      <ul>
        <li>
          WiFi network (Note: server software can automatically configure
          Firewall to open used communication port (UDP protocol). Otherwise it
          is required to open such port manually. Default port is 1700.),&nbsp;
        </li>
        <li>
          Bluetooth radio (Note: Windows Bluetooth stack is required on
          Windows),&nbsp;
        </li>
      </ul>
      <p
        className="MsoNormal"
        style={{ lineHeight: "normal", marginBottom: "0pt" }}
      >
        <b>
          <span style={{ fontSize: "14pt" }} lang="EN-US">
            &nbsp;
          </span>
        </b>
        <NavLink to="res">Server software can be downloaded here</NavLink>

      </p>
      <br />
    </div>
  );
};

/*
 
*/
