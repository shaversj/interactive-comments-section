"use client";

import Vote from "@/components/comment/Vote";
import React, { useState } from "react";
import UserComment from "@/components/comment/UserComment";
import AddComment from "@/components/comment/AddComment";
import { CommentAction } from "@/components/useComments";

type UserCommentCardProps = {
  comment: UserComment;
  currentUser: User;
  dispatch: React.Dispatch<CommentAction>;
  nextValidId: number;
};

export default function UserCommentCard({ comment, currentUser, dispatch, nextValidId }: UserCommentCardProps) {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className={""}>
        <div className={`col-start-2 col-end-2 ml-5 flex min-h-[10.438rem] gap-x-6 rounded-xl bg-white p-6 ${showReply && "-mb-3"}`}>
          <Vote comment={comment} />
          <UserComment comment={comment} currentUser={currentUser} showReply={showReply} setShowReply={setShowReply} dispatch={dispatch} />
        </div>
        {showReply && (
          <AddComment
            commentId={comment.id}
            user={currentUser}
            buttonText={"Reply"}
            dispatch={dispatch}
            setShowReply={setShowReply}
            nextValidId={nextValidId}
          />
        )}
      </div>
    </>
  );
}
