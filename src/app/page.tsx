"use client";

import type { FC } from "react";
import React, { memo } from "react";

const Page: FC = () => {
  return (
    <section className={"h-screen  w-full flex justify-start items-start"}>
      <h1>Page</h1>
    </section>
  );
};

export default memo(Page);
