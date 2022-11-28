import { useEffect, useCallback } from "react";
import Navbar from "../components/Header/Navbar";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../components/Posts/PostList";

const Home = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = jwtDecode(Cookies.get("JWT"));
      console.log(token);

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

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/api/showPost");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedPosts = data.map((postData) => {
        return {
          id: postData._id,
          title: postData.title,
          autor: postData.createdBy,
          content: postData.content,
          date: postData.createdAt,
          tags: postData.category,
        };
      });
      setPosts(transformedPosts);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostsHandler();
  }, [fetchPostsHandler]);

  const logoutHandler = () => {
    Cookies.remove("JWT");
    setAuthStatus(false);
    window.location.reload(false);
  };

  let postList = <p>Found no posts.</p>;

  if (posts.length > 0) {
    postList = <PostList posts={posts} />;
  }

  if (error) {
    postList = <p>{error}</p>;
  }

  if (isLoading) {
    postList = <p>Loading...</p>;
  }

  return (
    <>
      {authStatus && <Navbar onLogout={logoutHandler} isLoggedIn={true} />}
      {!authStatus && <Navbar isLoggedIn={false} />}
      <main className="flex justify-center align-middle">
        <section className="w-3/5">{postList}</section>
      </main>
    </>
  );
};

export default Home;
