import React from "react";

export default () => {
  return (
    <div>
      EG Compass 3D is a virtual 3D compass with physics simulation. On the very
      top it shows current position either from location provider (like GPS) or
      fixed inputted manually. When position is known it is used to show real
      North instead of magnetic one. Otherwise magnetic North is shown without
      any adjustment.
    </div>
  );
};
