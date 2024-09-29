"use client";

import Image from "next/image";
import { CommentAction } from "@/hooks/useComments";
import { useState } from "react";

type AddCommentProps = {
  user: User;
  replyingToComment?: UserComment;
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
            createdAt: new Date().getTime(),
            score: 0,
            user: user,
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_REPLY",
        payload: {
          commentId: parentCommentId || replyingToComment?.id || 0,
          reply: {
            id: nextValidId,
            content: commentContent,
            createdAt: new Date().getTime(),
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

  return (
    <>
      <form
        onSubmit={(e) => handleReplySubmit(e)}
        className={
          "mt-5 grid h-[11.813rem] min-w-0 grid-rows-[1fr,auto] gap-y-4 rounded-xl bg-white p-4 md:h-[9rem] md:grid-cols-[auto,1fr,auto] md:grid-rows-1 md:items-center md:gap-x-4 md:p-6"
        }
      >
        <Image className={"inline-block self-center md:self-start"} src={user.image.png} alt={"Avatar"} width={40} height={40} />
        <textarea
          className={
            "col-start-1 col-end-3 row-start-1 h-full rounded-xl border border-light-gray px-6 py-3 text-grayish-blue focus:outline-2 focus:outline-moderate-blue md:col-start-auto"
          }
          placeholder={"Add a comment..."}
          onChange={(e) => setCommentContent(e.target.value)}
          value={commentContent}
        />
        <button
          type={"submit"}
          className={
            "ml-auto h-[3rem] w-[6.5rem] self-start rounded-lg bg-moderate-blue font-semibold uppercase leading-6 text-light-gray hover:bg-light-grayish-blue"
          }
        >
          {buttonText}
        </button>
      </form>
    </>
  );
}
