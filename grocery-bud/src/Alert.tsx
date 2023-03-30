import React, { useEffect } from "react";

import { ItemType } from "./App";

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: (show?: boolean, type?: string, msg?: string) => void;
  list: ItemType[];
}

const Alert: React.FC<AlertProps> = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
