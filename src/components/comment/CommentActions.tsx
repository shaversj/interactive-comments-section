import Delete from "@/components/icons/Delete";
import Edit from "@/components/icons/Edit";
import Reply from "@/components/icons/Reply";
import { useState } from "react";
import { CommentAction } from "@/components/useComments";

type CommentActionsProps = {
  comment: UserComment;
  currentUser: User;
  showReply?: boolean;
  setShowReply?: (showReply: boolean) => void;
  dispatch?: React.Dispatch<CommentAction>;
};

export default function CommentActions({ comment, currentUser, showReply, setShowReply, dispatch }: CommentActionsProps) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className={"row-span-full row-start-3 mt-4 self-center md:col-span-full md:col-start-4 md:row-start-1 md:ml-auto md:mt-0 md:self-start"}>
      {currentUser.username === comment.user.username ? (
        <>
          <div className={"ml-auto flex gap-x-6"}>
            <button
              onClick={() => dispatch && dispatch({ type: "DELETE", payload: comment.id })}
              className={"group/delete flex items-center gap-x-[8.33px]"}
            >
              <Delete className={"fill-[#ED6368] group-hover/delete:fill-pale-red"} />
              <span className={"mt-1 font-medium leading-6 text-soft-red group-hover/delete:text-pale-red"}>Delete</span>
            </button>

            <button onClick={() => setIsEditing(!isEditing)} className={"group/edit flex items-center gap-x-[8.33px]"}>
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
  );
}
