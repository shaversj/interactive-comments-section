import Delete from "@/components/icons/Delete";
import Edit from "@/components/icons/Edit";
import Reply from "@/components/icons/Reply";
import { CommentAction } from "@/hooks/useComments";
import useModal from "@/hooks/useModal";
import Modal from "@/components/comment/Modal";
import { User, UserComment } from "@/types/user-comment";

type CommentActionsProps = {
  comment: UserComment;
  currentUser: User;
  showReply?: boolean;
  setShowReply?: (showReply: boolean) => void;
  dispatch: React.Dispatch<CommentAction>;
  toggleEditMode?: () => void;
};

export default function CommentActions({ comment, currentUser, showReply, setShowReply, dispatch, toggleEditMode }: CommentActionsProps) {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className={"row-span-full row-start-3 mt-4 self-center md:col-span-full md:col-start-4 md:row-start-1 md:ml-auto md:mt-0 md:self-start"}>
      <Modal isOpen={isOpen} dispatch={dispatch} comment={comment} closeModal={closeModal} />
      {currentUser.username === comment.user.username ? (
        <>
          <div className={"ml-auto flex gap-x-6"}>
            <button onClick={openModal} className={"group/delete flex items-center gap-x-[0.521rem]"}>
              <Delete className={"fill-[#ED6368] group-hover/delete:fill-pale-red"} />
              <span className={"mt-1 font-medium leading-6 text-soft-red group-hover/delete:text-pale-red"}>Delete</span>
            </button>

            <button onClick={toggleEditMode} className={"group/edit flex items-center gap-x-[0.521rem]"}>
              <Edit className={"fill-[#5357B6] group-hover/edit:fill-light-grayish-blue"} />
              <span className={"mt-1 font-medium leading-6 text-moderate-blue group-hover/edit:text-light-grayish-blue"}>Edit</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setShowReply && setShowReply(!showReply)}
            className={
              "group/reply ml-auto flex items-center gap-x-[0.328rem] font-medium leading-6 text-moderate-blue hover:text-light-grayish-blue"
            }
          >
            <Reply className={"fill-[#5357B6] group-hover/reply:fill-light-grayish-blue"} />
            Reply
          </button>
        </>
      )}
    </div>
  );
}
