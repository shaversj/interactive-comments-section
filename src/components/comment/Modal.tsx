import { CommentAction } from "@/hooks/useComments";
import { UserComment } from "@/types/user-comment";

export default function Modal({
  isOpen,
  dispatch,
  comment,
  closeModal,
}: {
  isOpen: boolean;
  dispatch: React.Dispatch<CommentAction>;
  comment: UserComment;
  closeModal: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className={"fixed inset-0 flex h-screen items-center justify-center bg-modal-bg bg-opacity-70"}>
      <div className={"h-[224px] w-[343px] rounded-lg bg-white px-[28px] py-6 md:h-[252px] md:w-[400px] md:p-8"}>
        <div className={"h-full w-full space-y-4 md:space-y-5"}>
          <h3 className={"text-xl font-medium leading-6 text-dark-blue md:text-2xl md:leading-[28px]"}>Delete Comment</h3>
          <p className={"leading-6 text-grayish-blue"}>
            Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone.
          </p>
          <div className={"flex h-12 w-full gap-x-3 md:gap-x-[0.875rem]"}>
            <button onClick={closeModal} className={"grow rounded-lg bg-grayish-blue font-medium uppercase leading-6 text-white"}>
              No, Cancel
            </button>
            <button
              onClick={() => dispatch && dispatch({ type: "DELETE", payload: comment.id })}
              className={"grow rounded-lg bg-soft-red font-medium uppercase leading-6 text-white"}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
