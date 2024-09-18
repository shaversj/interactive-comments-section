import Image from "next/image";

export default function AddComment({ user }: Readonly<{ user: User }>) {
  return (
    <>
      <div className={"flex h-[9rem] items-center gap-x-4 rounded-xl bg-white p-6"}>
        <Image className={"inline-block self-start"} src={user.image.png} alt={"Avatar"} width={40} height={40} />
        <textarea className={"border-light-gray text-grayish-blue focus:outline-outline-red-600 focus:outline-moderate-blue h-full w-[31.625rem] rounded-xl border px-6 py-3 text-[1rem] focus:outline-2"} placeholder={"Add a comment..."}></textarea>
        <button className={"hover:bg-light-grayish-blue text-light-gray bg-moderate-blue h-[3rem] w-[6.5rem] self-start rounded-lg text-[1rem] font-semibold uppercase leading-6"}>Send</button>
      </div>
    </>
  );
}
