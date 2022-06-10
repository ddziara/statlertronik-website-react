import React from "react";
import Image002 from "../../../images/products//thisismine-remote-control/res/image002.jpg";
import Image004 from "../../../images/products//thisismine-remote-control/res/image004.jpg";
import Image005 from "../../../images/products//thisismine-remote-control/res/image005.jpg";
import Image008 from "../../../images/products//thisismine-remote-control/res/image008.jpg";
import Image009 from "../../../images/products//thisismine-remote-control/res/image009.jpg";
import Image010 from "../../../images/products//thisismine-remote-control/res/image010.jpg";
import TIMRCDeviceManagerImg from "../../../images/products//thisismine-remote-control/res/timrc_devicemanager.jpg";
import TIMRCFirewallImg from "../../../images/products//thisismine-remote-control/res/timrc_firewall.jpg";
import TIMRCFirewallSettingsImg from "../../../images/products//thisismine-remote-control/res/timrc_firewallsettings.jpg";
import TIMRemoteControlSetupx862_3_0_0 from "../../../res/products/thisismine-remote-control/2_3_0_0/TIMRemoteControlSetupx86.msi";
import TIMRemoteControlSetupx862_2_0_0 from "../../../res/products/thisismine-remote-control/TIMRemoteControlSetupx86.msi";
import TIMRemoteControlSetupx642_3_0_0 from "../../../res/products/thisismine-remote-control/2_3_0_0/TIMRemoteControlSetupx64.msi";
import TIMRemoteControlSetupx642_2_0_0 from "../../../res/products/thisismine-remote-control/TIMRemoteControlSetupx64.msi";

export default () => {
  return (
    <div>
      To install ThisIsMine Remote Control server software on Windows operating
      system:
      <br />
      &nbsp;
      <br />
      <div style={{ marginLeft: "40px" }}>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontWeight: "bold" }}>Note:</span>
        </span>
      </div>
      <p style={{ marginLeft: "80px" }}>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontStyle: "italic" }}>
            {" "}
            Before installing a new version please uninstall previous one using
            control panel.
          </span>
        </span>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontStyle: "italic" }}>
            <br />
          </span>
        </span>
        <span style={{ color: "rgb(51, 102, 255)" }}>
          <span style={{ fontStyle: "italic" }}>
            Current version with support for new Windows like Windows 10
            (2.3.0.0) is available since 2016-02-28.
          </span>
        </span>
      </p>
      <ol>
        <li>
          download installer here <br />
        </li>
      </ol>
      <div style={{ marginLeft: "40px" }}>
        <a href={TIMRemoteControlSetupx862_3_0_0}>
          2.3.0.0 (for 32-bit operating system) 
        </a>
        &nbsp;&nbsp;&nbsp;
        <font color="#3366ff">
          <b>Note:</b>
          "ThisIsMine Remote Control" service is configured as Automatic
          (Delayed Start) - it will be started about 2 min after system boot
        </font>
        <br />
        <a href={TIMRemoteControlSetupx862_2_0_0}>
          2.2.0.0 (for 32-bit operating system) 
        </a>{" "}
        <br />
        <br />
      </div>
      <div style={{ marginLeft: "40px" }}>
        or here <br />
        <br />
      </div>
      <div style={{ marginLeft: "40px" }}>
        <a href={TIMRemoteControlSetupx642_3_0_0}>
        2.3.0.0 (for 64-bit operating system)
        </a>
        &nbsp;&nbsp;&nbsp;
        <font color="#3366ff">
          <b>Note:</b>
          "ThisIsMine Remote Control" service is configured as Automatic
          (Delayed Start) - it will be started about 2 min after system boot
        </font>
        <br />
        <a href={TIMRemoteControlSetupx642_2_0_0}>
        2.2.0.0 (for 64-bit operating system)
        </a>
        ,
      </div>
      <ol></ol>
      <br />
      <div style={{ marginLeft: "40px" }}>
        <span style={{ color: "rgb(255, 0, 0)" }}>
          <span style={{ fontWeight: "bold" }}>Warning:</span>
        </span>
        <br />
      </div>
      <p style={{ marginLeft: "80px" }}>
        <span style={{ color: "rgb(255, 0, 0)" }}>
          <span style={{ fontStyle: "italic" }}>
            This version contains unsigned drivers and therefore Human Interface
            Device Driver mode will not work on operating systems where driver
            signing is required (like Windows VistaTM 64-bit and newer)
          </span>
        </span>
      </p>
      <p
        className="MsoListParagraph"
        style={{
          lineHeight: "normal",
          textIndent: "-18pt",
          marginBottom: "0pt",
          textAlign: "left",
        }}
      >
        <br />
      </p>
      <ol start="2">
        <li>
          {" "}
          run double click on .msi file to perform installation{" "}
          <span style={{ color: "rgb(51, 102, 255)" }}>
            <span style={{ fontStyle: "italic" }}>
              (Note: Administrator privileges are required)
            </span>
          </span>
          ,
        </li>
      </ol>
      <p
        className="MsoListParagraph"
        style={{
          lineHeight: "normal",
          textIndent: "-18pt",
          marginBottom: "0pt",
          textAlign: "left",
        }}
      >
        {" "}
        <br />
      </p>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "499px", height: "386px" }}
          title="Remote Control for Android
                                  Installer"
          alt="Remote Control for
                                  Android Installer"
          src={Image002}
        />
        <br />
      </div>
      <br />
      <p
        className="MsoListParagraph"
        style={{
          lineHeight: "normal",
          marginBottom: "0pt",
          textAlign: "left",
          marginLeft: "40px",
        }}
      >
        Setup installs the following components: <br />
      </p>
      <ol style={{ listStyleType: "lower-alpha" }}>
        <ol style={{ listStyleType: "lower-alpha" }}>
          <li>
            HID (Human Interface Device) mini driver (in device manager switch
            view to "Devices by connection" and you should see something similar
            as below)
          </li>
        </ol>
      </ol>
      <br />
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "375px", height: "423px" }}
          title="Remote Control for Android HID
                                  Device Driver"
          alt="Remote Control for
                                  Android HID Device Driver"
          src={TIMRCDeviceManagerImg}
        />
        <br />
        <br />
        <div style={{ textSlign: "left" }}>
          <ol start="2" style={{ listStyleType: "lower-alpha" }}>
            <ol start="2" style={{ listStyleType: "lower-alpha" }}>
              <li>
                Windows service (open Control Panel-&gt;Administrative
                Tools-&gt;Services and you should see something similar as
                below)
              </li>
            </ol>
          </ol>
          <span style={{ fontSize: "14pt" }} lang="EN-US">
            {" "}
            <br />
          </span>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }} lang="EN-US">
              <img
                style={{ width: "1131px", height: "329px" }}
                title="Remote Control for
                                        Android Windows Service"
                alt="Remote Control for Android
                                        Windows Service"
                src={Image004}
              />
            </span>
            <br />
            <br />
            <ol
              start="3"
              style={{
                listStyleType: "lower-alpha",
                textAlign: "left",
                marginLeft: "40px",
              }}
            >
              <li>
                service configuration utility (Start Menu-&gt;All
                Programs-&gt;Statlertronik-&gt;ThisIsMine Remote Control)
              </li>
            </ol>

            <p
              className="MsoListParagraph"
              style={{
                margin: "0cm 0cm 0pt 54pt",
                lineHeight: "normal",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "14pt" }} lang="EN-US">
                &nbsp;
              </span>
            </p>
            <div style={{ textAlign: "left" }}>
              <ol start="3">
                <li>run service configuration utility</li>
              </ol>
            </div>
            <br />

            <img
              style={{ width: "520px", height: "494px" }}
              title="Remote Control for
                                      Android Configuration"
              alt="Remote
                                      Control for Android Configuration"
              src={Image005}
            />
            <br />
            <span style={{ fontSize: "14pt" }} lang="EN-US"></span>
          </div>

          <br />

          <p style={{ textAlign: "left", marginLeft: "40px" }}>
            <span style={{ fontWeight: "bold" }}>WiFi:</span>
            <span style={{ fontWeight: "bold" }}></span>
            <span style={{ fontWeight: "bold" }}>
              <br />
              UDP Port
            </span>{" "}
            - port used for communication (default&nbsp; is 1700)
            <span style={{ fontWeight: "bold" }}></span>
            <span style={{ fontWeight: "bold" }}>
              <br />
              Auto Firewall Config
            </span>{" "}
            - when selected service automatically opens appropriate UDP port in
            firewall; otherwise you have to open appropriate UDP port manually
            <span style={{ fontWeight: "bold" }}></span>
          </p>
          <p style={{ marginLeft: "40px" }}>
            <span style={{ fontWeight: "bold" }}></span>
          </p>
          <p
            className="MsoListParagraph"
            style={{
              lineHeight: "normal",
              marginBottom: "0pt",
              textAlign: "left",
              marginLeft: "40px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              Buttons:
              <br />
              Refresh
            </span>{" "}
            - loads current settings from the service
            <span style={{ fontWeight: "bold" }}>
              <br />
              Default
            </span>{" "}
            - load default values to the dialog
            <span style={{ fontWeight: "bold" }}>
              <br />
              Update
            </span>{" "}
            - writes current dialog values to the service
            <br />
          </p>
          <br />
        </div>

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
            <span style={{ fontWeight: "bold" }}>Method</span>
            <span style={{ fontWeight: "bold" }}>Selection</span>
            <br />
          </caption>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top", width: "33%" }}>
                <br />
              </td>

              <td
                style={{
                  verticalAlign: "top",
                  width: "33%",
                  backgroundDolor: "rgb(204, 204, 204)",
                }}
              >
                <p
                  className="MsoListParagraph"
                  style={{
                    margin: "0cm 0cm 0pt",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                  align="center"
                >
                  <span style={{ fontWeight: "bold" }}>Supported OS</span>
                </p>
              </td>

              <td
                style={{
                  verticalAlign: "top",
                  width: "34%",
                  textAlign: "center",
                  backgroundColor: "rgb(204, 204, 204)",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Supported applications
                </span>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  verticalAlign: "top",
                  backgroundColor: "rgb(204, 204, 204)",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Human Interface Device driver (preferred)
                </span>
              </td>
              <td style={{ verticalAlign: "top" }}>
                all Windows systems starting from Windows XP SP2 where signed
                drivers are not required (not supported on Windows Vista 64-bit,
                Windows 7 64-bit, Windows 8 64-bit, …)
              </td>
              <td style={{ verticalAlign: "top" }}>
                Any application that understands sent messages however it's
                targeted for Windows Media Center.
              </td>
            </tr>

            <tr>
              <td
                style={{
                  verticalAlign: "top",
                  backgroundColor: "rgb(204, 204, 204)",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Media Center AddIn</span>
              </td>
              <td style={{ verticalAlign: "top" }}>
                all Windows systems starting from Windows Vista either 32-bit or
                64-bit
              </td>
              <td style={{ verticalAlign: "top" }}>
                Only Windows Media Center starting from version 5.0 (Windows
                Vista)
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <ol start="4" style={{ textAlign: "left" }}>
          <li>
            <p>Optionally manually configure firewall </p>
          </li>
        </ol>
        <span style={{ fontSize: "14pt" }} lang="EN-US"></span>

        <table
          style={{
            textAlign: "left",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          border="0"
          cellPadding="4"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <img
                  style={{ width: "444px", height: "519px" }}
                  title="Remote Control
                                          for Windows Firewall
                                          Configuration"
                  alt="Remote
                                          Control for Windows Firewall
                                          Configuration"
                  src={TIMRCFirewallImg}
                />
              </td>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <img
                  style={{ width: "403px", height: "306px" }}
                  title="Remote Control
                                          for Android Windows Firewall
                                          Configuration"
                  alt="Remote
                                          Control for Android Windows
                                          Firewall Configuration"
                  src={TIMRCFirewallSettingsImg}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <p
          className="MsoListParagraph"
          style={{
            lineHeight: "normal",
            marginBottom: "0pt",
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: "14pt" }} lang="EN-US"></span>
        </p>
        <hr style={{ width: "100%", height: "2px" }} />

        <p
          className="MsoListParagraph"
          style={{
            lineHeight: "normal",
            marginBottom: "0pt",
            textAlign: "left",
          }}
        >
          To install ThisIsMine Remote Control client on Android:
        </p>
        <div style={{ textAlign: "left" }}>
          <ol>
            <li>install apk file</li>
            <li>
              press left blue button to open configuration and then input server
              IP address &amp; port (WiFi) or select Bluetooth device
            </li>
          </ol>
        </div>
        <br />

        <table
          style={{ textAlign: "left", marginLeft: "auto", marginRight: "auto" }}
          border="0"
          cellPadding="4"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top", width: "33%" }}>
                <img
                  style={{ width: "240px", height: "427px" }}
                  title="Remote Control for
                                          Android Screenshot"
                  alt="Remote Control for
                                          Android Screenshot"
                  src={Image008}
                />
              </td>
              <td style={{ verticalAlign: "top", width: "33%" }}>
                <img
                  style={{ width: "240px", height: "427px" }}
                  title="Remote Control for
                                          Android Screenshot"
                  alt="Remote Control for
                                          Android Screenshot"
                  src={Image009}
                />
              </td>
              <td style={{ verticalAlign: "top", width: "34%" }}>
                <img
                  style={{ width: "240px", height: "427px" }}
                  title="Remote Control for
                                          Android Screenshot"
                  alt="Remote Control for
                                          Android Screenshot"
                  src={Image010}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <br />
      </div>
    </div>
  );
};
