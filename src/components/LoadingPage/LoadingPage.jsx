import { height } from "@mui/system";
import React from "react";

const LoadingPage = () => {
  return (
    <div
      style={{
        Width: "100vh",
        height: "100vh",
        position: "relative",
        backgroundColor: "rgba(20,21,27,1)",
      }}
    >
      <img
        style={{
          top: "50%",
          left: "50%",
          zIndex: "1000 ",
          position: "absolute",
          transform: "translate(-50%,-55%)",
          width:"350px"
        }}
        src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"
      />
    </div>
  );
};

export default LoadingPage;
