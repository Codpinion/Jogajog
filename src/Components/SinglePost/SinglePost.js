import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const postId = useParams();
  const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId.postId}`;
  useEffect(() => {
    fetch(postUrl)
      .then((response) => response.json())
      .then((data) => setPost(data));
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);
  const commentsOfThisPost = comments.filter(
    (comment) => post.id === comment.postId
  );
  post.comments = commentsOfThisPost;
  post.avatar = "https://xsgames.co/randomusers/avatar.php?g=male";
  return (
    <div>
      <Post key={post.id} commentsOfThisPost={post.comments} post={post} />
    </div>
  );
};

export default SinglePost;
