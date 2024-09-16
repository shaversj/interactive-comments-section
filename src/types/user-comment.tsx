type UserComment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: User;
  replies?: UserComment[];
};

type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
