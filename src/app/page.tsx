"use client";

import { Fragment } from "react";
import AddComment from "@/components/comment/AddComment";
import CommentCard from "@/components/comment/CommentCard";
import CommentReplyLayout from "@/components/comment/CommentReplyLayout";
import useComments from "@/hooks/useComments";
import { customCommentData } from "@/data/custom-data";
import useNextValidId from "@/hooks/useNextValidId";
import { UserComment } from "@/types/user-comment";

export default function Home() {
  const { state, dispatch } = useComments({ initialState: customCommentData });
  const nextValidId = useNextValidId(state);

  return (
    <main className="mx-auto pt-8 md:w-[45.625rem] md:pt-16">
      <section className={"space-y-5"}>
        {state.comments
          .sort((a, b) => b.score - a.score)
          .map((comment: UserComment) => (
            <Fragment key={comment.id}>
              <CommentCard
                comment={comment}
                currentUser={state.currentUser}
                dispatch={dispatch}
                nextValidId={nextValidId}
                replyToOriginalComment={false}
              />
              {comment.replies && comment.replies.length > 0 && (
                <CommentReplyLayout>
                  {comment.replies
                    .sort((a, b) => b.createdAt - a.createdAt)
                    .map((reply: UserComment) => (
                      <CommentCard
                        key={reply.id}
                        parentCommentId={comment.id}
                        comment={reply}
                        currentUser={customCommentData.currentUser}
                        dispatch={dispatch}
                        nextValidId={nextValidId}
                        replyToOriginalComment={false}
                      />
                    ))}
                </CommentReplyLayout>
              )}
            </Fragment>
          ))}
        <AddComment
          user={customCommentData.currentUser}
          dispatch={dispatch}
          nextValidId={nextValidId}
          replyToOriginalComment={true}
          buttonText={"SEND"}
        />
      </section>
    </main>
  );
}
