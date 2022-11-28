const Post = (props) => {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();

  return (
    <article className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row mb-4 border-slate-200 border-2 p-3 rounded-lg">
      <div className="flex flex-col justify-between text-center">
        <p
          id="autor"
          className="flex h-8 w-20 items-center justify-center rounded-xl bg-backgroundGradient2 rounded-lg text-slate-100 sm:shrink-0 border"
        >
          {props.autor}
        </p>
        <p id="date" className="text-xs text-slate-300">{`${year}/${month}/${dt}`}</p>
      </div>
      <div className="sm:min-w-0 sm:flex-1">
        <p
          id="title"
          className="text-xl font-semibold leading-8 text-slate-900"
        >
        {props.title}
        </p>
        <p id="content" className="mt-2 text-sm leading-7 text-slate-600">
          {props.content}
        </p>
      </div>
    </article>
  );
};

export default Post;
