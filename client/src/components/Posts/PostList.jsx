import Post from "./Post";
import { Link } from "react-router-dom";

const PostList = (props) => {
  return (
    <ul className="flex flex-col">
      {props.posts.map((post) => (
        <Link key={post.id}to={`/post/${post.id}`}>
          <li >
            <Post
              autor={post.autor}
              title={post.title}
              date={post.date}
              content={post.content}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default PostList;
