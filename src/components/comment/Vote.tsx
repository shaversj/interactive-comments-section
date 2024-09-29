"use client";

import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import { CommentAction } from "@/hooks/useComments";
import { UserComment } from "@/types/user-comment";

export default function Vote({ comment, dispatch }: { comment: UserComment; dispatch: React.Dispatch<CommentAction> }) {
  const handleVote = (isUpVote: boolean) => {
    const newScore = isUpVote ? comment.score + 1 : comment.score - 1;
    dispatch({ type: "UPDATE_SCORE", payload: { id: comment.id, score: newScore } });
  };

  return (
    <div
      className={
        "row-span-full row-start-3 mt-4 flex h-10 w-[6.25rem] items-center justify-between gap-x-[0.584rem] rounded-lg bg-very-light-gray px-[0.974rem] py-[0.974rem] md:col-start-1 md:row-start-1 md:mt-0 md:h-[6.25rem] md:w-10 md:flex-col md:py-[0.744rem]"
      }
    >
      <button aria-label={"Upvote"} className={"group/plus"} onClick={() => handleVote(true)}>
        <Plus className={"fill-[#C5C6EF] group-hover/plus:fill-moderate-blue"} />
      </button>

      <span className={"font-medium text-moderate-blue"}>{comment.score}</span>
      <button aria-label={"Downvote"} className={"group/minus"} onClick={() => handleVote(false)}>
        <Minus className={"fill-[#C5C6EF] group-hover/minus:fill-moderate-blue"} />
      </button>
    </div>
  );
}
