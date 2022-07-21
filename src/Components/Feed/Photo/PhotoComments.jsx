import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

export default function PhotoComments({ comments, id }) {
  const [commentList, setCommentList] = useState(() => comments);
  const { logged } = useContext(UserContext);
  const commentsContainer = useRef();

  useEffect(() => {
    commentsContainer.current.scrollTop =
      commentsContainer.current.scrollHeight;
  }, [commentList]);

  return (
    <>
      <ul
        ref={commentsContainer}
        className="laptop:h-full px-8 pt-6 overflow-y-auto break-words"
      >
        {commentList.map((comment) => (
          <li key={comment.comment_ID} className="max-h-[50vh]">
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {logged && <PhotoCommentsForm id={id} setCommentList={setCommentList} />}
    </>
  );
}
