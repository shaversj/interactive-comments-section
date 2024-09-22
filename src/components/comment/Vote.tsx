"use client";

import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import { useState } from "react";

export default function Vote({ comment }: Readonly<{ comment: UserComment }>) {
  const [score, setScore] = useState(comment.score);
  return (
    <div className={"flex h-[6.25rem] w-10 flex-col items-center justify-between rounded-lg bg-very-light-gray py-[11.9px]"}>
      <button className={"group/plus"} onClick={() => setScore(score + 1)}>
        <Plus className={"fill-[#C5C6EF] group-hover/plus:fill-moderate-blue"} />
      </button>

      <span className={"font-medium text-moderate-blue"}>{score}</span>
      <button className={"group/minus"} onClick={() => setScore(score - 1)}>
        <Minus className={"fill-[#C5C6EF] group-hover/minus:fill-moderate-blue"} />
      </button>
    </div>
  );
}
