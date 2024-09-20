import React from "react";
import data from "@/data/data.json";
import AddComment from "@/components/comment/AddComment";
import UserCommentCard from "@/components/comment/UserCommentCard";
import ReplyLayout from "@/components/comment/ReplyLayout";

export default function Home() {
  return (
    <div className="mx-auto w-[730px]">
      <div className={"space-y-5"}>
        {data.comments.map((comment: UserComment) => (
          <React.Fragment key={comment.id}>
            <UserCommentCard comment={comment} currentUser={data.currentUser} />
            {comment.replies && comment.replies.length > 0 && (
              <ReplyLayout>
                {comment.replies.map((reply: UserComment) => (
                  <UserCommentCard key={reply.id} comment={reply} currentUser={data.currentUser} />
                ))}
              </ReplyLayout>
            )}
          </React.Fragment>
        ))}
        <AddComment user={data.currentUser} />
      </div>
    </div>
  );
}
