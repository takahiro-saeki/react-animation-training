import React, { useState, useCallback } from "react";
import posed from "react-pose";
import "./style.css";

const NotificationHeader = posed.div({
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -30
  }
});

const Example1 = () => {
  const [flag, setFlag] = useState(false);
  const [timeoutCache, setCache] = useState(null);

  const invokeShowHeader = useCallback(
    () => {
      clearTimeout(timeoutCache);
      if (flag) {
        setFlag(false);
      } else {
        setFlag(true);
        const cache = setTimeout(() => setFlag(false), 3000);
        setCache(cache);
      }
    },
    [flag]
  );
  return (
    <div>
      <NotificationHeader
        pose={flag ? "visible" : "hidden"}
        className="notification"
        onClick={invokeShowHeader}
      >
        message area
      </NotificationHeader>
      <div className="main-content">
        <button type="button" onClick={invokeShowHeader}>
          toggle
        </button>
      </div>
    </div>
  );
};

export default Example1;
