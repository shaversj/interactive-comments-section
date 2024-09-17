export default function UserReplyContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={"mt-5 grid grid-cols-[auto,1fr] grid-rows-[auto,auto] gap-x-[43px] gap-y-5 pl-[43px]"}>
      <div className={"border-light-gray row-span-full mb-2.5 w-0.5 border bg-red-400 pt-6"}></div>
      {children}
    </div>
  );
}
