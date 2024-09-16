import Image from "next/image";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import Reply from "@/components/icons/Reply";

export default function Home() {
  return (
    <div className="grid min-h-screen place-items-center">
      {/*Comment Card*/}
      <div className={"flex h-[167px] w-[730px] gap-x-6 rounded-xl bg-white p-6"}>
        <div className={"bg-very-light-gray flex h-[6.25rem] w-10 flex-col items-center justify-between rounded-lg py-[11.9px]"}>
          {/*  Vote */}
          <Plus />
          <span className={"text-moderate-blue font-bold"}>12</span>
          <Minus />
        </div>
        <div className={"flex w-full flex-col"}>
          <div className={"flex items-center gap-x-4"}>
            {/*  Comment Heading */}
            <Image className={"inline-block"} src={"/avatars/image-amyrobson.png"} alt={"Avatar"} width={32} height={32} />
            <span className={"text-dark-blue text-[1rem] font-semibold leading-[19px]"}>amyrobson</span>
            <span className={"text-grayish-blue inline text-[1rem] leading-6"}>1 month ago</span>
            <button className={"text-moderate-blue ml-auto flex items-center gap-x-[5.25px] font-semibold leading-6"}>
              <Reply />
              Reply
            </button>
          </div>

          <p className={"text-grayish-blue pt-[15px] text-[1rem] leading-6"}>
            {/*  Comment Body */}
            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </div>
  );
}
