import React, { ReactNode } from "react";
import Navbar from "./navbar/navbar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
