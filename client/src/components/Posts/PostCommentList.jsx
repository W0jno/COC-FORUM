import Comment from "./Comment";

const PostCommentList = (props) => {

   return <ul className="flex flex-col w-full items-center text-center border border-slate-300 rounded-lg">
      {props.comments.slice(0).reverse().map((comment) => (
          <li className="w-full flex min-h-10 items-center border-slate-300 border-b last:border-b-0" key={comment._id}>
            <Comment
              autor={comment.createdBy}
              content={comment.content}
            />
          </li>
      ))}
    </ul>;
};

export default PostCommentList;
