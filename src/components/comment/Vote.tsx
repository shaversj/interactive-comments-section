"use client";

import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import { useState } from "react";

export default function Vote({ comment }: Readonly<{ comment: UserComment }>) {
  const [score, setScore] = useState(comment.score);
  return (
    <div className={"flex h-[6.25rem] w-10 flex-col items-center justify-between rounded-lg bg-very-light-gray py-[11.9px]"}>
      <button onClick={() => setScore(score + 1)}>
        <Plus />
      </button>

      <span className={"font-bold text-moderate-blue"}>{score}</span>
      <button onClick={() => setScore(score - 1)}>
        <Minus />
      </button>
    </div>
  );
}
