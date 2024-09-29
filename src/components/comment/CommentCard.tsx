"use client";

import Vote from "@/components/comment/Vote";
import React, { useState } from "react";
import AddComment from "@/components/comment/AddComment";
import { CommentAction } from "@/hooks/useComments";
import CommentActions from "@/components/comment/CommentActions";
import CommentDetails from "@/components/comment/CommentDetails";
import CommentContainer from "@/components/comment/CommentContainer";

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
    <article className={"px-4 md:px-0"}>
      <CommentContainer showReply={showReply}>
        <Vote comment={comment} dispatch={dispatch} />
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
      </CommentContainer>

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
    </article>
  );
}
