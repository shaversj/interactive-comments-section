"use client";

import Image from "next/image";
import { useState } from "react";
import { CommentAction } from "@/hooks/useComments";
import { formatDate } from "@/utils/utils";
import { User, UserComment } from "@/types/user-comment";

type UserCommentProps = {
  comment: UserComment;
  currentUser: User;
  dispatch?: React.Dispatch<CommentAction>;
  isEditing: boolean;
  toggleEditMode: () => void;
};

export default function CommentDetails({ comment, currentUser, dispatch, isEditing, toggleEditMode }: UserCommentProps) {
  const [commentContent, setCommentContent] = useState(comment.content);

  function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const textAreaValue = (e.target as HTMLFormElement).querySelector("textarea")?.value;
    dispatch && dispatch({ type: "UPDATE", payload: { id: comment.id, body: textAreaValue || "" } });
    toggleEditMode();
  }

  return (
    <div className={"col-start-1 col-end-3 flex flex-col md:col-end-5 md:row-start-1 md:ml-16"}>
      <div className={"flex items-center gap-x-4"}>
        <Image className={"inline-block"} src={comment.user.image.png} alt={"Avatar"} width={32} height={32} />
        <span className={"text-[1rem] font-medium leading-[1.188rem] text-dark-blue"}>{comment.user.username}</span>

        {currentUser.username === comment.user.username && (
          <div className={"grid h-[1.188rem] w-[2.25rem] place-items-center rounded-sm bg-moderate-blue"}>
            <span className={"text-[0.813rem] font-medium leading-[0.938rem] text-white"}>you</span>
          </div>
        )}

        <span className={"inline text-[1rem] leading-6 text-grayish-blue"}>{formatDate(comment.createdAt)}</span>
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdate} className={"flex flex-col"}>
          <textarea
            className={
              "focus:outline-outline-red-600 mt-[0.938rem] h-[7.875rem] w-[31.625rem] rounded-xl border border-light-gray px-6 py-3 text-[1rem] text-grayish-blue focus:outline-2 focus:outline-moderate-blue"
            }
            placeholder={"Add a comment..."}
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          ></textarea>
          <button
            type={"submit"}
            className={
              "ml-auto mt-4 h-[3rem] w-[6.5rem] self-start rounded-lg bg-moderate-blue text-[1rem] font-semibold uppercase leading-6 text-light-gray hover:bg-light-grayish-blue"
            }
          >
            UPDATE
          </button>
        </form>
      ) : (
        <p className={"w-full pt-[0.938rem] text-[1rem] leading-6 text-grayish-blue"}>
          {comment.replyingTo ? (
            <>
              <span className={"font-medium text-moderate-blue"}>@{comment.replyingTo} </span>
              {commentContent}
            </>
          ) : (
            commentContent
          )}
        </p>
      )}
    </div>
  );
}
