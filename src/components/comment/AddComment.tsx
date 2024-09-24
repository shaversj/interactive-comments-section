"use client";

import Image from "next/image";
import { CommentAction } from "@/components/useComments";
import { useState } from "react";

type AddCommentProps = {
  user: User;
  replyingToComment: UserComment;
  buttonText?: string;
  dispatch: React.Dispatch<CommentAction>;
  setShowReply?: (showReply: boolean) => void;
  nextValidId: number;
  parentCommentId?: number;
  replyToOriginalComment: boolean;
};

export default function AddComment({
  user,
  replyingToComment,
  buttonText = "Comment",
  dispatch,
  setShowReply,
  nextValidId,
  parentCommentId,
  replyToOriginalComment,
}: AddCommentProps) {
  const [commentContent, setCommentContent] = useState("");

  function handleReplySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (replyToOriginalComment) {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          commentId: nextValidId,
          reply: {
            id: nextValidId,
            content: commentContent || "",
            createdAt: getTodayDate(),
            score: 0,
            user: user,
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_REPLY",
        payload: {
          commentId: parentCommentId || replyingToComment.id,
          reply: {
            id: nextValidId,
            content: commentContent || "",
            createdAt: getTodayDate(),
            score: 0,
            user: user,
            replyingTo: replyingToComment?.user?.username || replyingToComment?.replyingTo,
          },
        },
      });
    }

    if (setShowReply) {
      setShowReply(false);
    }

    setCommentContent("");
  }

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  }

  return (
    <>
      <form onSubmit={(e) => handleReplySubmit(e)} className={"ml-5 mt-5 flex h-[9rem] min-w-0 items-center gap-x-4 rounded-xl bg-white p-6"}>
        <Image className={"inline-block self-start"} src={user.image.png} alt={"Avatar"} width={40} height={40} />
        <textarea
          className={
            "focus:outline-outline-red-600 h-full rounded-xl border border-light-gray px-6 py-3 text-[1rem] text-grayish-blue focus:outline-2 focus:outline-moderate-blue md:w-full"
          }
          placeholder={"Add a comment..."}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button
          type={"submit"}
          className={
            "h-[3rem] w-[6.5rem] self-start rounded-lg bg-moderate-blue text-[1rem] font-semibold uppercase leading-6 text-light-gray hover:bg-light-grayish-blue"
          }
        >
          {buttonText}
        </button>
      </form>
    </>
  );
}
