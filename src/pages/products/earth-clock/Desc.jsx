import React from "react";

export default () => {
  return (
    <div>
      <p
        style={{lineHeight: "normal", marginBottom: "0pt"}}
                        
      >
        <span lang="EN-US">Features:</span>
      </p>
      
       <ul>
         <li>
           <span style={{fontFamily: "Symbol"}} lang= "EN-US">
             <span
               style={{font: "7pt/normal \"Times New Roman\"",
                               fontSizeAdjust: "none", fontStretch:
                               "normal"}}
             ></span>
           </span>
           <span lang="EN-US">
             the following alarm types: timer alarms (fired in some time after an
             alarm is activated), once alarms (fired during single date at once
             or more times, eg. at 6:15 and 12:30), weekly alarms (fired during
             selected week days&nbsp; once or more times), monthly alarms (fired
             during selected days of selected months, also at the last and -1 or
             -2 days earlier, once or more times), periodic alarms (fired every n
             days after start date, during single date at once or more times),
             event alarms (fired when event such as sunrise, sun transit or
             sunset happens with some offset that can be after or before); fired
             alarm can be stopped or snoozed and snoozed can be canceled,
           </span>
         </li>
         <li>
           <span style={{fontFamily: "Symbol"}} lang="EN-US">
             <span
               style={{font: "7pt/normal \"TimesNewRoman\"",
                               fontSizeAdjust: "none", fontStretch:
                               "normal"}}
             ></span>
           </span>
           <span lang="EN-US">
             alarms preferences that include: vibrating on/off, snooze time (how
             long to wait after alarm was snoozed before firing it again), audio
             file to play during alarm, mode of using alarm spoken
             description/audio file (none, with audio - audio file is played
             &amp; from time to time alarm description is spoken, audio is paused
             -&nbsp; audio file is played &amp; from time to time it is paused
             and alarm description is spoken, without audio - only alarm
             description is spoken) ; alarm preferences are hierarchical, more
             detailed overrides more general or modifies them (detail description
             can be appended to general one); usage of detail preferences is
             optional &amp; general preferences (top level) can override all
             detail.
           </span>
         </li>
         <li>
           <span style={{fontFamily: "Symbol"}} lang="EN-US">
             <span
               style={{font: "7pt/normal \"Times New Roman\"",
                               fontSizeAdjust: "none", fontStretch:
                               "normal"}}
             ></span>
           </span>
           <span lang="EN-US">
             special circular controls for fast setting of alarm date and time,
           </span>
         </li>
         <li>
           <span style={{fontFamily: "Symbol"}} lang="EN-US">
             <span
               style={{font: "7pt/normal \"Times New Roman\"",
                               fontSizeAdjust: "none", fontStretch:
                               "normal"}}
             ></span>
           </span>
           <span lang="EN-US">
             current date and time presentation; time is presented in both forms,
             analog and digital; also current time zone and day saving time
             offsets are presented,
           </span>
         </li>
         <li>
           <span style={{fontFamily: "Symbol"}} lang="EN-US">
             <span
               style={{font: "7pt/normal \"Times New Roman\"",
                               fontSizeAdjust: "none", fontStretch:
                               "normal"}}
             ></span>
           </span>
           <span lang="EN-US">
             closest to current time sunrise, sun transit and sunrise are
             optionally shown; when an event date is different from the
             current&nbsp; date the date is also shown along the event time; when
             the sun doesn't set during a day then only sun icon is shown; when
             the sun doesn't rise during a day then only moon icon is shown;
           </span>
         </li>
         <li>
           <span style={{fontFamily: "Symbol"}} lang="EN-US">
             <span
               style={{font: "7pt/normal| \"Times New Roman\"",
                                              fontSizeAdjust: "none", fontStretch:
                               "normal"}}

             ></span>
           </span>
           <span lang="EN-US">Earth globe lit by the sun is shown,</span>
        </li>
         <li>
           <span style={{fontFamily: "Symbol"}} lang="EN-US">
             <span
               style={{font: "7pt/normal \"Times New Roman\"",
                               fontSizeAdjust: "none", fontStretch:
                               "normal"}}
             ></span>
           </span>
           <span lang="EN-US">
             current position on the globe from location provider (like GPS) or
             manually inputted.
           </span>
         </li>
       </ul>
    </div>
  );
};
