export default function UserCommentContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={"col-start-2 col-end-2 flex h-[167px] gap-x-6 rounded-xl bg-white p-6"}>{children}</div>;
}
