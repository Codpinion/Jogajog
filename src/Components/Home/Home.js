import { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);
  //Adding a comments thing to post object
  posts.map((post) => {
    const commentsOfThisPost = comments.filter(
      (comment) => post.id === comment.postId
    );
    post.comments = commentsOfThisPost;
    post.avatar = "https://xsgames.co/randomusers/avatar.php?g=male";
  });

  return (
    <>
      <h1>News feed</h1>
      {posts.map((post) => (
        <Post key={post.id} commentsOfThisPost={post.comments} post={post} />
      ))}
    </>
  );
};

export default Home;
