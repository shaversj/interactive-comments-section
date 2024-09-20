import data from "@/data/data.json";
import UserReplyContainer from "@/components/comment/UserReplyContainer";
import AddComment from "@/components/comment/AddComment";
import React from "react";
import UserCommentCard from "@/components/comment/UserCommentCard";

export default function Home() {
  return (
    <div className="mx-auto w-[730px]">
      <div className={"space-y-5"}>
        {data.comments.map((comment: UserComment) => (
          <React.Fragment key={comment.id}>
            <UserCommentCard comment={comment} currentUser={data.currentUser} />

            {comment.replies && comment.replies.length > 0 && (
              <UserReplyContainer>
                {comment.replies &&
                  comment.replies.length > 0 &&
                  comment.replies.map((reply: UserComment) => <UserCommentCard key={reply.id} comment={reply} currentUser={data.currentUser} />)}
              </UserReplyContainer>
            )}
          </React.Fragment>
        ))}

        <AddComment user={data.currentUser} />
      </div>
    </div>
  );
}
