"use client";

import { useReducer } from "react";

export type CommentAction =
  | { type: "ADD"; payload: { commentId: number; reply: UserComment } }
  | { type: "DELETE"; payload: number }
  | { type: "UPDATE"; payload: { id: number; body: string } };

export default function useComments({ initialState }: { initialState: CommentData }) {
  const commentReducer = (state: CommentData, action: CommentAction): CommentData => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === action.payload.commentId
              ? {
                  ...comment,
                  replies: comment.replies ? [action.payload.reply, ...comment.replies] : [action.payload.reply],
                }
              : comment,
          ),
        };
      case "DELETE":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === action.payload
              ? {
                  ...comment,
                  replies: comment.replies ? comment.replies.filter((reply) => reply.id !== action.payload) : [],
                }
              : {
                  ...comment,
                  replies: comment.replies ? comment.replies.filter((reply) => reply.id !== action.payload) : [],
                },
          ),
        };
      case "UPDATE":
        const updatedComments = state.comments.map((comment) =>
          comment.id === action.payload.id
            ? {
                ...comment,
                body: action.payload.body,
              }
            : comment,
        );

        const updatedReplies = state.comments.map((comment) =>
          comment.replies
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === action.payload.id
                    ? {
                        ...reply,
                        body: action.payload.body,
                      }
                    : reply,
                ),
              }
            : comment,
        );
        return {
          ...state,
          comments: updatedComments.map((comment, index) => ({
            ...comment,
            replies: updatedReplies[index].replies,
          })),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(commentReducer, {
    comments: initialState.comments,
    currentUser: initialState.currentUser,
  });

  return { state, dispatch };
}
