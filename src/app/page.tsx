"use client";

import { useEffect, useState, Fragment } from "react";
import data from "@/data/data.json";
import AddComment from "@/components/comment/AddComment";
import UserCommentCard from "@/components/comment/UserCommentCard";
import ReplyLayout from "@/components/comment/ReplyLayout";
import useComments from "@/components/useComments";
import { getNextValidId } from "@/utils/utils";

export default function Home() {
  const { state, dispatch } = useComments({ initialState: data });
  const [nextValidId, setNextValidId] = useState(getNextValidId({ commentData: state }));

  useEffect(() => {
    setNextValidId(getNextValidId({ commentData: state }));
  }, [state.comments]);

  return (
    <div className="mx-auto w-[375px] md:w-[45.625rem]">
      <div className={"space-y-5"}>
        {state.comments.map((comment: UserComment) => (
          <Fragment key={comment.id}>
            <UserCommentCard comment={comment} currentUser={state.currentUser} dispatch={dispatch} nextValidId={nextValidId} />
            {comment.replies && comment.replies.length > 0 && (
              <ReplyLayout>
                {comment.replies.map((reply: UserComment) => (
                  <UserCommentCard key={reply.id} comment={reply} currentUser={data.currentUser} dispatch={dispatch} nextValidId={nextValidId} />
                ))}
              </ReplyLayout>
            )}
          </Fragment>
        ))}
        <AddComment user={data.currentUser} dispatch={dispatch} />
      </div>
    </div>
  );
}
