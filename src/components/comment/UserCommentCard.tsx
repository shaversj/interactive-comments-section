"use client";

import Vote from "@/components/comment/Vote";
import React, { useState } from "react";
import UserComment from "@/components/comment/UserComment";
import AddComment from "@/components/comment/AddComment";
import { CommentAction } from "@/components/useComments";
import Stuff from "@/components/comment/Stuff";

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
        <div
          className={`mx-4 grid min-w-[21.438rem] grid-rows-1 rounded-xl bg-white p-6 md:mx-0 md:ml-5 md:min-h-[10.438rem] md:grid-flow-col md:grid-cols-[auto,auto,auto] md:grid-rows-[auto] md:gap-x-6 ${showReply && "-mb-3"}`}
        >
          <Vote comment={comment} />

          <UserComment comment={comment} currentUser={currentUser} showReply={showReply} setShowReply={setShowReply} dispatch={dispatch} />
          <Stuff comment={comment} currentUser={currentUser} showReply={showReply} setShowReply={setShowReply} dispatch={dispatch} />
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
