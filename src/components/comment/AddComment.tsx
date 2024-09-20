import Image from "next/image";

export default function AddComment({ user, buttonText = "Send" }: Readonly<{ user: User; buttonText?: string }>) {
  return (
    <>
      <div className={"flex h-[9rem] min-w-0 items-center gap-x-4 rounded-xl bg-white p-6"}>
        <Image className={"inline-block self-start"} src={user.image.png} alt={"Avatar"} width={40} height={40} />
        <textarea className={"focus:outline-outline-red-600 h-full w-[31.625rem] rounded-xl border border-light-gray px-6 py-3 text-[1rem] text-grayish-blue focus:outline-2 focus:outline-moderate-blue"} placeholder={"Add a comment..."}></textarea>
        <button className={"h-[3rem] w-[6.5rem] self-start rounded-lg bg-moderate-blue text-[1rem] font-semibold uppercase leading-6 text-light-gray hover:bg-light-grayish-blue"}>{buttonText}</button>
      </div>
    </>
  );
}
