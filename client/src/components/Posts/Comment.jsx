const Comment = (props) => {
  return (
    <div className="flex w-full h-full items-center">
      <div className="w-1/5 border-r border-slate-300 h-full flex items-center justify-center">{props.autor}</div>
      <div className="w-4/5">{props.content}</div>
    </div>
  );
};

export default Comment;
