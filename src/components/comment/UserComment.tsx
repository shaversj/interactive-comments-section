"use client";

import Image from "next/image";
import Reply from "@/components/icons/Reply";

type UserCommentProps = {
  comment: UserComment;
  currentUser: User;
  showReply?: boolean;
  setShowReply?: (showReply: boolean) => void;
};

export default function UserComment({ comment, currentUser, showReply, setShowReply }: UserCommentProps) {
  return (
    <div className={"flex w-full flex-col"}>
      <div className={"flex items-center gap-x-4"}>
        <Image className={"inline-block"} src={comment.user.image.png} alt={"Avatar"} width={32} height={32} />
        <span className={"text-[1rem] font-medium leading-[1.188rem] text-dark-blue"}>{comment.user.username}</span>

        {currentUser.username === comment.user.username && (
          <div className={"grid h-[1.188rem] w-[2.25rem] place-items-center rounded-sm bg-moderate-blue"}>
            <span className={"text-[0.813rem] font-medium leading-[0.938rem] text-white"}>you</span>
          </div>
        )}

        <span className={"inline text-[1rem] leading-6 text-grayish-blue"}>{comment.createdAt}</span>
        <button
          onClick={() => setShowReply && setShowReply(!showReply)}
          className={"ml-auto flex items-center gap-x-[0.328rem] font-medium leading-6 text-moderate-blue"}
        >
          <Reply />
          Reply
        </button>
      </div>
      <p className={"pt-[0.938rem] text-[1rem] leading-6 text-grayish-blue"}>{comment.content}</p>
    </div>
  );
}
