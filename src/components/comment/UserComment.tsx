"use client";

import Image from "next/image";
import Reply from "@/components/icons/Reply";
import Delete from "@/components/icons/Delete";
import Edit from "@/components/icons/Edit";

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

        {currentUser.username === comment.user.username ? (
          <>
            <div className={"ml-auto flex gap-x-6"}>
              <button className={"group/delete flex items-center gap-x-[8.33px]"}>
                <Delete className={"fill-[#ED6368] group-hover/delete:fill-pale-red"} />
                <span className={"mt-1 font-medium leading-6 text-soft-red group-hover/delete:text-pale-red"}>Delete</span>
              </button>

              <button className={"group/edit flex items-center gap-x-[8.33px]"}>
                <Edit className={"fill-[#5357B6] group-hover/edit:fill-light-grayish-blue"} />
                <span className={"mt-1 font-medium leading-6 text-moderate-blue group-hover/edit:text-light-grayish-blue"}>Edit</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setShowReply && setShowReply(!showReply)}
              className={
                "group/reply ml-auto flex items-center gap-x-[0.328rem] font-medium leading-6 text-moderate-blue hover:text-light-grayish-blue"
              }
            >
              <Reply className={"fill-[#5357B6] group-hover/reply:fill-light-grayish-blue"} />
              Reply
            </button>
          </>
        )}
      </div>
      <p className={"pt-[0.938rem] text-[1rem] leading-6 text-grayish-blue"}>{comment.content}</p>
    </div>
  );
}
