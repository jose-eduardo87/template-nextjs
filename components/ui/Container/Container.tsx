import { FC } from "react";

import styles from "./Container.module.css";

const Container: FC = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
