"use client";

import Vote from "@/components/comment/Vote";
import React, { useState } from "react";
import AddComment from "@/components/comment/AddComment";
import { CommentAction } from "@/components/useComments";
import CommentActions from "@/components/comment/CommentActions";
import CommentDetails from "@/components/comment/CommentDetails";

type UserCommentCardProps = {
  comment: UserComment;
  currentUser: User;
  dispatch: React.Dispatch<CommentAction>;
  nextValidId: number;
  parentCommentId?: number;
  replyToOriginalComment: boolean;
};

export default function CommentCard({
  comment,
  currentUser,
  dispatch,
  nextValidId,
  parentCommentId,
  replyToOriginalComment = false,
}: UserCommentCardProps) {
  const [showReply, setShowReply] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className={""}>
        <div
          className={`mx-4 grid min-w-[21.438rem] grid-rows-1 rounded-xl bg-white p-6 md:mx-0 md:ml-5 md:min-h-[10.438rem] md:grid-cols-[auto,auto,auto] md:grid-rows-[auto] md:gap-x-6 ${showReply && "-mb-3"}`}
        >
          <Vote comment={comment} />

          <CommentDetails
            comment={comment}
            currentUser={currentUser}
            showReply={showReply}
            setShowReply={setShowReply}
            dispatch={dispatch}
            toggleEditMode={toggleEditMode}
            isEditing={isEditing}
          />
          <CommentActions
            comment={comment}
            currentUser={currentUser}
            showReply={showReply}
            setShowReply={setShowReply}
            dispatch={dispatch}
            toggleEditMode={toggleEditMode}
          />
        </div>
        {showReply && (
          <AddComment
            parentCommentId={parentCommentId}
            replyingToComment={comment}
            user={currentUser}
            buttonText={"Reply"}
            dispatch={dispatch}
            setShowReply={setShowReply}
            nextValidId={nextValidId}
            replyToOriginalComment={replyToOriginalComment}
          />
        )}
      </div>
    </>
  );
}
