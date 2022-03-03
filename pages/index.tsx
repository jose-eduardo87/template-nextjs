import { FC } from "react";
import type { NextPage } from "next";
import { Layout } from "@/components/common";

import styles from "../styles/Home.module.css";

const Home: NextPage & { Layout: FC } = () => {
  return <h1>Hello!</h1>;
};

Home.Layout = Layout;

export default Home;
