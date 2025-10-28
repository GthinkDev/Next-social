"use client";

import type { FC } from "react";
import React, { memo } from "react";
import { SignUp } from "@clerk/nextjs";

const Page: FC = () => {
  return (
    <div
      className={"w-full h-[calc(100vh-64px)] flex justify-center items-center"}
    >
      <SignUp />
    </div>
  );
};

export default memo(Page);
