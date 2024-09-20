"use client";

import Image from "next/image";
import Reply from "@/components/icons/Reply";

type UserCommentProps = {
  comment: UserComment;
  showReply?: boolean;
  setShowReply?: (showReply: boolean) => void;
};

export default function UserComment({ comment, showReply, setShowReply }: UserCommentProps) {
  return (
    <div className={"flex w-full flex-col"}>
      <div className={"flex items-center gap-x-4"}>
        <Image className={"inline-block"} src={comment.user.image.png} alt={"Avatar"} width={32} height={32} />
        <span className={"text-[1rem] font-semibold leading-[19px] text-dark-blue"}>{comment.user.username}</span>
        <span className={"inline text-[1rem] leading-6 text-grayish-blue"}>{comment.createdAt}</span>
        <button
          onClick={() => setShowReply && setShowReply(!showReply)}
          className={"ml-auto flex items-center gap-x-[5.25px] font-semibold leading-6 text-moderate-blue"}
        >
          <Reply />
          Reply
        </button>
      </div>
      <p className={"pt-[15px] text-[1rem] leading-6 text-grayish-blue"}>{comment.content}</p>
    </div>
  );
}
