export default function CommentContainer({ showReply, children }: { showReply: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`mx-4 grid min-w-[21.438rem] grid-rows-1 rounded-xl bg-white p-6 md:mx-0 md:ml-5 md:min-h-[10.438rem] md:grid-cols-[auto,auto,auto] md:grid-rows-[auto] md:gap-x-6 ${showReply && "-mb-3"}`}
    >
      {children}
    </div>
  );
}
