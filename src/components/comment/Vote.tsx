"use client";

import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import { CommentAction } from "@/hooks/useComments";

export default function Vote({ comment, dispatch }: { comment: UserComment; dispatch: React.Dispatch<CommentAction> }) {
  const handleVote = (isUpVote: boolean) => {
    const newScore = isUpVote ? comment.score + 1 : comment.score - 1;
    dispatch({ type: "UPDATE_SCORE", payload: { id: comment.id, score: newScore } });
  };

  return (
    <div
      className={
        "row-span-full row-start-3 mt-4 flex h-[40px] w-[100px] items-center justify-between gap-x-[9.35px] rounded-lg bg-very-light-gray px-[15.58px] py-[15.59px] md:col-start-1 md:row-start-1 md:mt-0 md:h-[6.25rem] md:w-10 md:flex-col md:py-[11.9px]"
      }
    >
      <button className={"group/plus"} onClick={() => handleVote(true)}>
        <Plus className={"fill-[#C5C6EF] group-hover/plus:fill-moderate-blue"} />
      </button>

      <span className={"font-medium text-moderate-blue"}>{comment.score}</span>
      <button className={"group/minus"} onClick={() => handleVote(false)}>
        <Minus className={"fill-[#C5C6EF] group-hover/minus:fill-moderate-blue"} />
      </button>
    </div>
  );
}
