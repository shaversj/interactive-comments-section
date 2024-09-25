"use client";

import { useEffect, useState, Fragment } from "react";
import AddComment from "@/components/comment/AddComment";
import UserCommentCard from "@/components/comment/UserCommentCard";
import CommentReplyLayout from "@/components/comment/CommentReplyLayout";
import useComments from "@/components/useComments";
import { getNextValidId } from "@/utils/utils";
import { customCommentData } from "@/data/custom-data";

export default function Home() {
  const { state, dispatch } = useComments({ initialState: customCommentData });
  const [nextValidId, setNextValidId] = useState(getNextValidId({ commentData: state }));

  useEffect(() => {
    setNextValidId(getNextValidId({ commentData: state }));
  }, [state.comments]);

  return (
    <div className="mx-auto w-[375px] md:w-[45.625rem]">
      <div className={"space-y-5"}>
        {state.comments.map((comment: UserComment) => (
          <Fragment key={comment.id}>
            <UserCommentCard
              comment={comment}
              currentUser={state.currentUser}
              dispatch={dispatch}
              nextValidId={nextValidId}
              replyToOriginalComment={false}
            />
            {comment.replies && comment.replies.length > 0 && (
              <CommentReplyLayout>
                {comment.replies.map((reply: UserComment) => (
                  <UserCommentCard
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
      </div>
    </div>
  );
}
