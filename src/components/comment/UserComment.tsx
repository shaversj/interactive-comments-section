import Image from "next/image";
import Reply from "@/components/icons/Reply";

export default function UserComment({ comment }: Readonly<{ comment: UserComment }>) {
  return (
    <div className={"flex w-full flex-col"}>
      <div className={"flex items-center gap-x-4"}>
        <Image className={"inline-block"} src={comment.user.image.png} alt={"Avatar"} width={32} height={32} />
        <span className={"text-dark-blue text-[1rem] font-semibold leading-[19px]"}>{comment.user.username}</span>
        <span className={"text-grayish-blue inline text-[1rem] leading-6"}>{comment.createdAt}</span>
        <button className={"text-moderate-blue ml-auto flex items-center gap-x-[5.25px] font-semibold leading-6"}>
          <Reply />
          Reply
        </button>
      </div>
      <p className={"text-grayish-blue pt-[15px] text-[1rem] leading-6"}>{comment.content}</p>
    </div>
  );
}
