import React from "react";
import { ChildProps } from "./ChildProps";

export const ParentProps = () => {
  const data = " a b c d 1 2 3 4 ";
  return (
    <div>
      <h2>Hello i m Parent Component</h2>
      <ChildProps NaamDedo={data} NaamLelo={"okey"} />
    </div>
  );
};
