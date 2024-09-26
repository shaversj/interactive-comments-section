export default function Modal() {
  return (
    <div className={"px-7 py-6"}>
      <h3 className={"text-xl leading-6 text-dark-blue"}>Delete Comment</h3>
      <p className={"leading-6 text-grayish-blue"}>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
      <div className={"flex h-12 gap-x-3 md:gap-x-[0.875rem]"}>
        <button className={"bg-grayish-blue font-medium uppercase leading-6"}>No, Cancel</button>
        <button className={"bg-soft-red font-medium uppercase leading-6 text-white"}>Yes, Delete</button>
      </div>
    </div>
  );
}
