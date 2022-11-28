import Post from "./Post";

const PostList = (props) => {
  return (
    <ul className="flex flex-col">
      {props.posts.map((post) => (
        <li key={post.id}>
          <Post
            autor={post.autor}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
