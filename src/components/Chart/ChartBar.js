import React from "react";

import "./ChartBar.css";

const ChatBar = (props) => {
  return (
    <div className="chat-bar">
      <div className="chat-bar__inner">
        <div className="chat-bar__fill"></div>
      </div>
      <div className="chart-bar__label"></div>

    </div>
  );
};

export default ChatBar;
