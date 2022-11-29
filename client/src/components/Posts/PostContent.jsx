import Card from "../UI/Card";

const PostContent = (props) => {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();

  return (
    <Card className="p-0 overflow-hidden w-3/5 min-h-30vh bg-slate-50">
      <header className=" bg-backgroundGradient1 w-full flex align-baseline justify-between py-3 px-10 text-slate-100">
        <h1 className="text-5xl">{props.title}</h1>
        <div id="info" className="flex flex-col">
          <h3>Autor: {props.autor}</h3> <p className="text-xs text-right">{`${year}/${month}/${dt}`}</p>
        </div>
      </header>
      <article className="p-5 text-2xl">{props.content}</article>
    </Card>
  );
};

export default PostContent;
