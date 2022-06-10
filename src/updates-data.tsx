interface IUpdateData {
  id: number;
  productID: number;
  descHTML: string;
}

/*
  Note: this is a reverse ordes (newest are at the end of the array)
*/
const data: IUpdateData[] = [
  {
    id: 1,
    productID: 6, // honey comb puzzle
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">game major update </span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">v. 2.0.0)<br>
    </span></span><br>
  Changes:<br>
  <p> </p>
  <ul>
    <li>improved graphics</li>
  </ul>`,
  },
  
  {
    id: 2,
    productID: 8, // restore blue
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(game major update v.
      2.0.0)</span></span><br>
  <br>
  Changes:<br>
  <ul>
    <li>improved graphics</li>
  </ul>`,
  },
  {
    id: 3,
    productID: 12,   // thisismine remote control
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(remote control major
      update v. 1.4.0, server
      software v.2.0.0.0) </span></span><br>
  <br>
  Changes:<br>
  <ul>
    <li>alternative work mode of the
      server software is now
      supported via Windows Media
      Center AddIn; this mode is
      supported for Windows
      32/64-bit systems starting
      from Windows Vista </li>
  </ul>`,
  },
  {
    id: 4,
    productID: 5,  // gravity! gravity!           
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(a new game v.1.0.0)</span></span><br>
  <br>
  Gravity! Gravity is a simple game.
  All you need to do is to throw the
  ball in the gate. Standard number
  of points you get for this is 1
  but it can be increased by
  throwing faster. If you place
  there all standard balls then you
  are rewarded by an extra ball and
  then next extra ball and so on
  till all extra balls are used or
  player fails.`,
  },
  {
    id: 5,
    productID: 11,  // thisismine mouse
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(a new tool
      application,</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;"> </span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">v.1.0.0, server
      software v.2.1.0.0)</span></span>
  <br>
  <br>
  ThisIsMine Mouse is a virtual
  mouse device installed on Android
  device (min. v. 2.1) and
  controlling Windows operating
  system (min. XP SP2, both 32-bit
  &amp; 64-bit). It uses WiFi
  (UDP/IP) or Bluetooth for
  communication. Server software can
  work in one of two modes: using
  HID minidriver (only 32-bit OS or
  64-bit Windows XP), simulating
  mouse messages (process requires
  administrator privileges).`,
  },
  {
    id: 6,
    productID: 4,   // eg compass 3d
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(a new tool
      application v.1.0.0)</span></span><br>
  <br>
  EG Compass 3D is a virtual 3D
  compass with physics simulation.
  On the very top it shows current
  position either from location
  provider (like GPS) or fixed
  inputted manually. When position
  is known it is used to show real
  North instead of magnetic one.
  Otherwise magnetic North is shown
  without any adjustments.`,
  },
  {
    id: 7,
    productID: 2,        // earth clock
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(alarm clock major
      update v . 3.0.0)</span></span><br>
  <br>
  Changes:<br>
  <ul>
    <li>3D surfaces are now
      supported</li>
    <li>periodic &amp; event alarms
      are added</li>
    <li>graphics is improved</li>
    <li>selection of graphics mode
      is now supported</li>
  </ul>`,
  },
  {
    id: 8,
    productID: 9,       // shakeme bell
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(bell simulator
      update </span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">v.1.1.0</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">)</span></span><br>
  <br>
  Changes:<br>
  <ul>
    <li>3D surfaces are now
      supported</li>
    <li>additional floors are added</li>
  </ul>`,
  },
  {
    id: 9,
    productID: 10,   // shark in the water
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(a new live wallpaper
      application</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">v.1.0.0</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">)</span></span><br>
  <br>
  Features:<br>
  <ul>
    <li>simulated shark<br>
    </li>
    <li>interactive water</li>
    <li>adjustable water murkiness</li>
    <li>selectable backgrounds <br>
    </li>
  </ul>`,
  },
  {
    id: 10,
    productID: 11,   // thisismine mouse
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(major update,</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;"> </span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">v.1.1.0, server
      software v.2.2.0.0)</span></span>
  <br>
  <br>
  Changes:<br>
  <ul>
    <li>new Windows versions (like
      Windows 10) are now supported<br>
    </li>
    <li>interaction with a user is
      improved</li>
    <li>graphics is modified<br>
    </li>
  </ul>`,
  },
  {
    id: 11,
    productID: 3,   // earth globe compass
    descHTML: `<span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">(a new utility/live
      wallpaper application</span></span><span
    style="color: rgb(51, 102,
    255);"><span style="font-style:
      italic;">)</span></span> <br>
  <br>
  Features:<br>
  <ul>
    <li>physics simulation of a
      compass with Earth Globe</li>
    <li>current lighting of Earth
      Globe<br>
    </li>
    <li>current location on the
      Earth Globe</li>
    <li>next event (sunrise,
      transit, sunset) time &amp;
      date</li>
    <li>current time, date, time
      zone &amp; DST</li>
    <li>the app can be used as a
      wallpaper<br>
    </li>
  </ul>`,
  },
  
];

export default data;
