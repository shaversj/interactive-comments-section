import React from "react";

export default function ReplyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={"flex-col-2 flex"}>
      <div className={"row-span-full mb-2.5 ml-[43px] w-0.5 min-w-0 border border-light-gray bg-red-400 pt-6"}></div>
      <div className={"min-w-0 space-y-5 pl-[43px]"}>{children}</div>
    </div>
  );
}
