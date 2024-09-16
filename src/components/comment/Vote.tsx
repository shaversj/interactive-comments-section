import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";

export default function Vote() {
  return (
    <div className={"bg-very-light-gray flex h-[6.25rem] w-10 flex-col items-center justify-between rounded-lg py-[11.9px]"}>
      {/*  Vote */}
      <Plus />
      <span className={"text-moderate-blue font-bold"}>12</span>
      <Minus />
    </div>
  );
}
