export default function CommentContainer({ showReply, children }: { showReply: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`grid grid-rows-1 rounded-xl bg-white p-4 md:mx-0 md:min-h-[10.438rem] md:grid-cols-[auto,auto,auto] md:grid-rows-[auto] md:gap-x-6 md:p-6 ${showReply && "-mb-3"}`}
    >
      {children}
    </div>
  );
}
