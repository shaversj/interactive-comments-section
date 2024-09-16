export default function UserCommentContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={"flex h-[167px] w-[730px] gap-x-6 rounded-xl bg-white p-6"}>{children}</div>;
}
