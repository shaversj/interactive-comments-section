export function getNextValidId({ commentData }: { commentData: CommentData }) {
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
