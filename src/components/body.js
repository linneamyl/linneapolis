import React from "react";
import { Lead } from "./typography/lead";

const Body = ({ text }) => {
  return (
    <div>
      <Lead>{text}</Lead>
    </div>
  );
};

export default Body;
