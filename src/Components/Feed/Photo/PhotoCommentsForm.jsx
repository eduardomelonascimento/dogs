import classNames from "classnames";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { PostComment } from "../../../services/api";
import SendIcon from "../../Svgs/SendIcon";

export default function PhotoCommentsForm({ id, setCommentList, single }) {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  function handleChange({ target }) {
    setComment(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (comment.length > 0) {
      const { url, options } = PostComment(
        id,
        comment.trim(),
        localStorage.getItem("token")
      );
      const { response, json } = await request(url, options);
      if (response.ok) {
        setComment("");
        setCommentList((comments) => [...comments, json]);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 flex items-center">
      <textarea
        name="comment"
        id="comment"
        value={comment}
        placeholder="Comente"
        onChange={handleChange}
        className={"bg-gray-200 p-3 max-h-14 rounded-md resize-none border w-full"}
      ></textarea>
      <button className="bg-transparent hover:border-none hover:cursor-pointer hover:shadow-none transition-none">
        <SendIcon />
      </button>
      {error && error.message}
    </form>
  );
}
