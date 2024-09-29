export type UserComment = {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  replyingTo?: string;
  user: User;
  username?: string;
  replies?: UserComment[];
};

export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type CommentData = {
  currentUser: User;
  comments: UserComment[];
};
