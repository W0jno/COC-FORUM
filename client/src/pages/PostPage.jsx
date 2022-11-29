import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostCommentList from "../components/Posts/PostCommentList";
import PostContent from "../components/Posts/PostContent";
import Navbar from "../components/Header/Navbar";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import AddComment from "../components/Posts/AddComment";

const PostPage = (props) => {
  const [authStatus, setAuthStatus] = useState(false);
  useEffect(() => {
    try {
      const token = jwtDecode(Cookies.get("JWT"));

      if (token.id) {
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
      }
    } catch (err) {
      Cookies.remove("JWT");
      setAuthStatus(false);
    }
  }, []);
  const logoutHandler = () => {
    Cookies.remove("JWT");
    setAuthStatus(false);
    window.location.reload(false);
  };

  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const fetchPostHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:4000/api/post/${id}`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setPost(data.post);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPostHandler();
  }, [fetchPostHandler]);

  return (
    <main className="flex justify-center items-center flex-col">
      {authStatus && <Navbar onLogout={logoutHandler} isLoggedIn={true} />}
      {!authStatus && <Navbar isLoggedIn={false} />}
      <section className="flex flex-col w-screen justify-center items-center">
        <PostContent
          title={post.title}
          autor={post.createdBy}
          content={post.content}
          date={post.createdAt}
        />
      </section>
      <section className="flex flex-col w-3/5 justify-center items-center mt-10 rounded-lg p-6">
      {authStatus && <AddComment fetchComments={fetchPostHandler} id_posta={id}/>}
        {post.comments && post.comments.length > 0 && <PostCommentList comments={post.comments} />}
      </section>
    </main>
  );
};

export default PostPage;
