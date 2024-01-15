import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoaderComponent = ({ loading }) => (
  <>
    <Dimmer active={loading} />
    <Loader
      active={loading}
      inline="centered"
      style={{
        height: "100%",
        position: "fixed",
        top: "50%",
        left: "0",
        width: "100%",
      }}
    />
  </>
);

export default LoaderComponent;
