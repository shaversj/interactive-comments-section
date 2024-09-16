import UserComment from "@/components/comment/UserComment";
import UserCommentContainer from "@/components/comment/UserCommentContainer";
import Vote from "@/components/comment/Vote";

const myData = {
  id: 1,
  content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago",
  score: 12,
  user: {
    image: {
      png: "/images/avatars/image-amyrobson.png",
      webp: "/images/avatars/image-amyrobson.webp",
    },
    username: "amyrobson",
  },
  replies: [],
};

export default function Home() {
  return (
    <div className="grid min-h-screen place-items-center">
      <UserCommentContainer>
        <Vote />
        <UserComment comment={myData} />
      </UserCommentContainer>
    </div>
  );
}
