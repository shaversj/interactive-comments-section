import { useEffect, useState } from "react";
import { CommentData, UserComment } from "@/types/user-comment";

export default function useNextValidId(state: CommentData) {
  const [nextValidId, setNextValidId] = useState(getNextValidId({ commentData: state }));

  function getNextValidId({ commentData }: { commentData: CommentData }) {
    let maxId = 0;
    {
      commentData &&
        commentData.comments.forEach((comment: UserComment) => {
          if (comment.id > maxId) {
            maxId = comment.id;
          }
          if (comment.replies) {
            comment.replies.forEach((reply) => {
              if (reply.id > maxId) {
                maxId = reply.id;
              }
            });
          }
        });
    }

    return maxId + 1;
  }

  useEffect(() => {
    setNextValidId(getNextValidId({ commentData: state }));
  }, [state]);

  return nextValidId;
}
