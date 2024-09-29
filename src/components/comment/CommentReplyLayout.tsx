import React from "react";

export default function CommentReplyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={"flex-col-2 flex"}>
      <div className={"row-span-full mb-2.5 ml-4 min-w-0 border-2 border-light-gray pt-6 md:ml-[2.688rem]"}></div>
      <div className={"w-full space-y-5 md:pl-[2.688rem]"}>{children}</div>
    </div>
  );
}
