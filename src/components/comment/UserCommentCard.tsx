"use client";

import Vote from "@/components/comment/Vote";
import React, { useState } from "react";
import UserComment from "@/components/comment/UserComment";
import AddComment from "@/components/comment/AddComment";

type UserCommentCardProps = {
  comment: UserComment;
  currentUser: User;
};

export default function UserCommentCard({ comment, currentUser }: UserCommentCardProps) {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className={`col-start-2 col-end-2 flex h-[167px] gap-x-6 rounded-xl bg-white p-6 ${showReply && "-mb-3"}`}>
        <Vote comment={comment} />
        <UserComment comment={comment} showReply={showReply} setShowReply={setShowReply} />
      </div>
      {showReply && <AddComment user={currentUser} buttonText={"Reply"} />}
    </>
  );
}
