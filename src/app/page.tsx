import UserComment from "@/components/comment/UserComment";
import UserCommentContainer from "@/components/comment/UserCommentContainer";
import Vote from "@/components/comment/Vote";
import data from "@/data/data.json";
import UserReplyContainer from "@/components/comment/UserReplyContainer";

export default function Home() {
  return (
    <div className="mx-auto w-[730px]">
      <div className={"space-y-5"}>
        {data.comments.map((comment: UserComment) => (
          <>
            <UserCommentContainer key={comment.id}>
              <Vote />
              <UserComment comment={comment} />
            </UserCommentContainer>

            {comment.replies && comment.replies.length > 0 && (
              <UserReplyContainer>
                {comment.replies &&
                  comment.replies.length > 0 &&
                  comment.replies.map((reply: UserComment) => (
                    <UserCommentContainer key={reply.id}>
                      <Vote />
                      <UserComment comment={reply} />
                    </UserCommentContainer>
                  ))}
              </UserReplyContainer>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
