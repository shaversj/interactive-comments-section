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

export const formatDate = (timestamp: number) => {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
