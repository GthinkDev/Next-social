"use client";

import type { FC } from "react";
import React, { memo } from "react";
import { SignIn } from "@clerk/nextjs";

const Page: FC = () => {
  return (
    <div
      className={"w-full h-[calc(100vh-64px)] flex justify-center items-center"}
    >
      <SignIn />
    </div>
  );
};

export default memo(Page);
