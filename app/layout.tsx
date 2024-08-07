import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { RecoilRoot } from "recoil";
import RecoilWrapper from "@/ui/layouts/example";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en"  className="w-fit h-fit">
    <body className="w-fit h-fit">
      <RecoilWrapper>
        <AntdRegistry>{children}</AntdRegistry>
      </RecoilWrapper>
    </body>
  </html>
);

export default RootLayout;
