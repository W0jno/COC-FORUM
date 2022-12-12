import { useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const AddComment = (props) => {
  const [commentValue, setCommentValue] = useState("");

  const addCommentHandler = async () => {
    const token = jwtDecode(Cookies.get("JWT"));
    const { user } = token;
      const response = await fetch("/api/post/comment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUser: user,
          content: commentValue,
          post_id: props.id_posta,
        }),
      });

      const data = await response.json();
      if (data.status === "ok") {
        setCommentValue("");
        props.fetchComments();
      } else if (data.status === "error") {
        setCommentValue("");
      }
    
  };

  const inputChangeHandler = (e) => {
    setCommentValue(e.target.value);
  };

  return (
    <div className="flex items-start justify-between w-full h-28 bg-slate-100 rounded-lg mb-10 px-5 py-2">
      <textarea
        className="resize-none block p-2.5 w-full text-lg bg-slate-100 placeholder-slate-300 h-full"
        type="text"
        placeholder="Add comment..."
        name="comment_content"
        id="comment_content"
        value={commentValue}
        onInput={inputChangeHandler}
      />
      <div className="w-44 h-full flex items-end text-sm">
        <button
          onClick={addCommentHandler}
          className="shadow bg-btncolor rounded-lg h-8 ml-10 w-full"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
