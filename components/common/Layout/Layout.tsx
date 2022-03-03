import { FC } from "react";
import { Navbar, Footer } from "@/components/common";

import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
