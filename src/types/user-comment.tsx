type UserComment = {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  replyingTo?: string;
  user: User;
  username?: string;
  replies?: UserComment[];
};

type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

type CommentData = {
  currentUser: User;
  comments: UserComment[];
};
