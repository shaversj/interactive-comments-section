"use client";

import Image from "next/image";
import { CommentAction } from "@/components/useComments";

type AddCommentProps = {
  user: User;
  commentId?: number;
  buttonText?: string;
  dispatch?: React.Dispatch<CommentAction>;
  setShowReply?: (showReply: boolean) => void;
  nextValidId?: number;
};

export default function AddComment({ user, commentId, buttonText = "Comment", dispatch, setShowReply, nextValidId }: AddCommentProps) {
  function handleReplySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const textAreaValue = (e.target as HTMLFormElement).querySelector("textarea")?.value;

    {
      commentId &&
        dispatch &&
        nextValidId &&
        dispatch({
          type: "ADD",
          payload: {
            commentId: commentId,
            reply: { id: nextValidId, content: textAreaValue || "", createdAt: getTodayDate(), score: 0, user: user },
          },
        });
    }

    if (setShowReply) {
      setShowReply(false);
    }
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
            "focus:outline-outline-red-600 h-full w-[31.625rem] rounded-xl border border-light-gray px-6 py-3 text-[1rem] text-grayish-blue focus:outline-2 focus:outline-moderate-blue"
          }
          placeholder={"Add a comment..."}
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
