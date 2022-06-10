import React from "react";
import Image002 from "../../../images/products/thisismine-mouse/res/image002.jpg"
import Image003 from "../../../images/products/thisismine-mouse/res/image003.jpg"
import Image004 from "../../../images/products/thisismine-mouse/res/image004.jpg"
import Image005 from "../../../images/products/thisismine-mouse/res/image005.jpg"
import Image006 from "../../../images/products/thisismine-mouse/res/image006.jpg"
import Image007 from "../../../images/products/thisismine-mouse/res/image007.jpg"
import Image008 from "../../../images/products/thisismine-mouse/res/image008.jpg"
import Image009 from "../../../images/products/thisismine-mouse/res/image009.jpg"
import Image010 from "../../../images/products/thisismine-mouse/res/image010.jpg"
import TIMMouseSetupx32Msi2_2_1_0 from "../../../res/products/thisismine-mouse/2_2_1_0/TIMMouseSetupx32.msi"
import TIMMouseSetupx32Msi2_1_0_0 from "../../../res/products/thisismine-mouse/TIMMouseSetupx32.msi"
import TIMMouseSetupx64Msi2_2_1_0 from "../../../res/products/thisismine-mouse/2_2_1_0/TIMMouseSetupx64.msi"
import TIMMouseSetupx64Msi2_1_0_0 from "../../../res/products/thisismine-mouse/TIMMouseSetupx64.msi"

export default () => {
  return (
    <div>
      {" "}
      ThisIsMine Mouse server on WindowsTM operating system:
      <br />
      <p style={{ marginLeft: "40px" }}>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontWeight: "bold" }}>Note:</span>
        </span>
      </p>
      <p style={{ marginLeft: "80px" }}>
        {" "}
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontStyle: "italic" }}>
            Before installing a new version please uninstall previous one using
            control panel.
          </span>
        </span>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontStyle: "italic" }}> </span>
        </span>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontStyle: "italic" }}>
            Current version with support for new Windows like Windows 10
            (2.2.1.0) is available since 2016-02-28.
          </span>
        </span>
      </p>
      <ol>
        <li>
          download installer here <br />
        </li>
      </ol>
      To install
      <div style={{ marginLeft: "40px" }}>
        <a href={TIMMouseSetupx32Msi2_2_1_0}>
          2.2.1.0 (for 32-bit operating system)
        </a>
        &nbsp;&nbsp;&nbsp;
        <font color="#3366ff">
          <b>Note:</b>
          "ThisIsMine Mouse" service is configured as Automatic (Delayed Start)
          - it will be started about 2 min after system boot
        </font>
        <br />
        <a href={TIMMouseSetupx32Msi2_1_0_0}>
          2.1.0.0 (for 32-bit operating system)
        </a>{" "}
        <br />
        &nbsp; <br />
      </div>
      <div style={{ marginLeft: "40px" }}>
        or here
        <br />
        <br />
      </div>
      <div style={{ marginLeft: "40px" }}>
        <a href={TIMMouseSetupx64Msi2_2_1_0}>
          2.2.1.0 (for 64-bit operating system)
        </a>
        &nbsp;&nbsp;&nbsp;
        <font color="#3366ff">
          <b>Note:</b>
          "ThisIsMine Mouse" service is configured as Automatic (Delayed Start)
          - it will be started about 2 min after system boot
        </font>
        <br />
        <a href={TIMMouseSetupx64Msi2_1_0_0}>
          2.1.0.0 (for 64-bit operating system)
        </a>
        <br />
      </div>
      <ol></ol>
      <p style={{ marginLeft: "40px" }}>
        <span style={{ color: "rgb(255, 0, 0)" }}>
          <span style={{ fontWeight: "bold" }}>Warning:</span>
        </span>
      </p>
      <p style={{ marginLeft: "80px" }}>
        <span style={{ color: "rgb(255, 0, 0)" }}>
          <span style={{ fontStyle: "italic" }}>
            This version contains unsigned drivers and therefore Human Interface
            Device Driver mode will not work on operating systems where driver
            signing is required (like Windows VistaTM 64-bit and newer)
          </span>
        </span>
      </p>
      <ol start="2">
        <li>
          run double click on .msi file to perform installation{" "}
          <span style={{ color: "rgb(51, 102, 255)" }}>
            <span style={{ fontStyle: "italic" }}>
              (Note: Administrator privileges are required)
            </span>
          </span>
          ,
        </li>
      </ol>
      <br />
      <div style={{ textAlign: "center" }}>
        <img
          title="Mouse Simulator for Android
                                  &amp; Windows Installer"
          alt="Mouse
                                  Simulator for Android &amp; Windows
                                  Installer"
          src={Image002}
        />
        <br />
      </div>
      <br />
      <br />
      <p style={{ marginLeft: "40px" }}>
        Setup installs the following components:
      </p>
      <ol
        start="1"
        style={{ listStyleType: "lower-alpha", marginLeft: "40px" }}
      >
        <li>
          HID (Human Interface Device) mini driver (in device manager switch
          view to "Devices by connection" and you should see something similar
          as below)
        </li>
      </ol>
      <div style={{ textAlign: "center" }}>
        <img
          title="Mouse Simulator for Android
                                  &amp; Windows HID Device Driver"
          alt="Mouse Simulator for Android &amp;
                                  Windows HID Device Driver"
          src={Image003}
        />
      </div>
      <br />
      <ol
        start="2"
        style={{ listStyleType: "lower-alpha", marginLeft: "40px" }}
      >
        <li>
          WindowsTM service (open Control Panel-&gt;Administrative
          Tools-&gt;Services and you should see something similar as below)
        </li>
      </ol>
      <br />
      <div style={{ textAlign: "center" }}>
        <img
          title="Mouse Simulator for Android
                                  &amp; Windows Service"
          alt="Mouse
                                  Simulator for Android &amp; Windows
                                  Service"
          src={Image004}
        />
        <br />
        <br />
      </div>
      <br />
      <br />
      <ol
        start="3"
        style={{ listStyleType: "lower-alpha", marginLeft: "40px" }}
      >
        <li>
          service configuration utility (Start Menu-&gt;All
          Programs-&gt;Statlertronik-&gt;ThisIsMine Mouse)
        </li>
      </ol>
      <ol start="3">
        <li>run service configuration utility</li>
      </ol>
      <br />
      <div style={{ textAlign: "center" }}>
        <img
          title="Mouse Simulator for Android
                                  &amp; Windows Configuration"
          alt="Mouse Simulator for Android &amp;
                                  Windows Configuration"
          src={Image005}
        />
        <br />
      </div>
      <br />
      <p
        className="MsoListParagraph"
        style={{
          lineHeight: "normal",
          marginBottom: "0pt",
          marginLeft: "40px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Buttons:</span>
        <br />
        <span style={{ fontWeight: "bold" }}>Refresh</span>- loads current
        settings from the service
        <br />
        <span style={{ fontWeight: "bold" }}>Default</span>- load default values
        to the dialog
        <br />
        <span style={{ fontWeight: "bold" }}>Update</span>- writes current
        dialog values to the service
        <br />
        <br />
      </p>
      <div style={{ marginLeft: "40px" }}>
        {" "}
        <span style={{ fontWeight: "bold" }}>WiFi:</span>
        <br />
        <span style={{ fontWeight: "bold" }}>UDP Port</span> - port used for
        communication (default&nbsp; is 1701)
        <br />
        <span style={{ fontWeight: "bold" }}>Auto Firewall Config</span> - when
        selected service automatically opens appropriate UDP port in firewall;
        otherwise you have to open appropriate UDP port manually
        <br />
        <br />
        <table
          style={{
            textAlign: "left",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          border="1"
          cellPadding="2"
          cellSpacing="0"
        >
          <caption>
            <span style={{ fontWeight: "bold" }}>Method Selection</span>
            <br />
          </caption>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top", width: "30%" }}>
                <br />
              </td>
              <td
                style={{
                  verticalAlign: "top",
                  width: "30%",
                  textAlign: "center",
                  backGroundColor: "rgb(204, 204, 204)",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Supported OS</span>
              </td>
              <td
                style={{
                  verticalAlign: "top",
                  width: "40%",
                  textAlign: "center",
                  backgroundColor: "rgb(204, 204, 204)",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Notes</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  verticalQlign: "top",
                  backgroundColor: "rgb(204, 204, 204)",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Human Interface Device driver (preferred)
                  </span>
                </p>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <p
                  style={{
                    marginTop: "0cm",
                    marginRightValue: "0cm",
                    marginBottom: "0pt",
                    marginLeftValue: "0cm",
                    marginLeftLtrSource: "physical",
                    marginLeftRtlSource: "physical",
                    marginRightLtrSource: "physical",
                    marginRightRtlSource: "physical",
                    lineHeight: "normal",
                  }}
                >
                  all Windows systems starting from Windows XP SP2 where signed
                  drivers are not required (not supported on Windows Vista
                  64-bit, Windows 7 64-bit, Windows 8 64-bit, …)
                </p>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <br />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  verticalAlign: "top",
                  backgroundColor: "rgb(204, 204, 204)",
                  width: "34%",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Mouse messages simulation
                  </span>
                </p>
              </td>

              <td style={{ verticalAlign: "top", width: "33%" }}>
                <p
                  style={{
                    marginTop: "0cm",
                    marginRightValue: "0cm",
                    marginBottom: "0pt",
                    marginLeftValue: "0cm",
                    marginLeftLtrSource: "physical",
                    marginLeftRtlSource: "physical",
                    marginRightLtrSource: "physical",
                    marginRightRtlSource: "physical",
                    lineHeight: "normal",
                  }}
                >
                  all Windows systems starting from Windows XP SP2 either 32-bit
                  or 64-bit
                </p>
              </td>
              <td style={{ verticalAlign: "top", width: "33%" }}>
                <p
                  style={{
                    marginTop: "0cm",
                    marginRightValue: "0cm",
                    marginBottom: "0pt",
                    marginLeftValue: "0cm",
                    marginLeftLtrSource: "physical",
                    marginLeftRtlSource: "physical",
                    marginRightLtrSource: "physical",
                    marginRightRtlSource: "physical",
                    lineHeight: "normal",
                  }}
                >
                  in this mode mouse won’t work when login desktop or security
                  desktop (User Account Control prompt is displayed) is active;{" "}
                </p>
                <br />
                <p>
                  <span style={{ color: "rgb(255, 0, 0)" }}>
                    <span style={{ fontWeight: "bold" }}>Important:</span>
                  </span>
                </p>
                <p>
                  <span style={{ color: "rgb(255, 0, 0)" }}>
                    <span style={{ fontStyle: "italic" }}>
                      Windows Vista or higher version: the first time after user
                      is logged it is necessary to manually confirm elevation of
                      the process <sup>1)</sup>
                      simulating mouse messages (required to send messages to
                      elevated windows)
                    </span>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center" }}>
          <sup>1)</sup>
          TIMMouseSendInputProxy.exe{" "}
        </div>
        <ol start="4" style={{ textAlign: "left" }}>
          <li>
            <p>Optionally manually configure firewall </p>
          </li>
        </ol>
        <br />
        <table
          style={{ textAlign: "left", marginLeft: "auto", marginRight: "auto" }}
          border="0"
          cellPadding="4"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <img
                  title="Mouse Simulator for
                                          Android &amp; Windows Firewall
                                          Settings"
                  alt="Mouse Simulator
                                          for Android &amp; Windows
                                          Firewall Settings"
                  src={Image006}
                />
              </td>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <img
                  title="Mouse Simulator for
                                          Android &amp; Windows Firewall
                                          Settings"
                  alt="Mouse Simulator
                                          for Android &amp; Windows
                                          Firewall Settings"
                  src={Image007}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <hr style={{ width: "100%", height: "2px" }} />
        <p>To install ThisIsMine Mouse client on AndroidTM:</p>
        <ol>
          <li> install apk file,</li>
          <li>
            tap left blue button to open configuration and then input server IP
            address &amp; port (WiFi) or select Bluetooth device.
          </li>
          <br />
        </ol>
        <table
          style={{ textAlign: "left", marginLeft: "auto", marginRight: "auto" }}
          border="0"
          cellPadding="4"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <img
                  title="Mouse Simulator for
                                          Android &amp; Windows
                                          Screenshot"
                  alt="Mouse
                                          Simulator for Android &amp;
                                          Windows Screenshot"
                  src={Image008}
                />
              </td>
              <td style={{ verticalAlign: "top" }}>
                <img
                  title="Mouse Simulator for
                                          Android &amp; Windows
                                          Screenshot"
                  alt="Mouse
                                          Simulator for Android &amp;
                                          Windows Screenshot"
                  src={Image009}
                />
              </td>
              <td style={{ verticalAlign: "top" }}>
                <img
                  title="Mouse Simulator for
                                          Android &amp; Windows
                                          Screenshot"
                  alt="Mouse
                                          Simulator for Android &amp;
                                          Windows Screenshot"
                  src={Image010}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

