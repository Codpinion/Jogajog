import { useEffect, useState } from "react"
import Post from "../Post/Post"

const Home = () => {
    const [posts, setPosts] =  useState([]);
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setComments(data))

    }, [])
    //Adding a comments thing to post object
    posts.map((post) => {
        const commentsOfThisPost = comments.filter((comment) => post.id === comment.postId)
        post.comments = commentsOfThisPost;
    })

  
  return (
    <>
    <h1>Your News feed</h1>
    {
        posts.map((post) => {
             return (<Post key={post.id} commentsOfThisPost={post.comments} post={post} />);
         } )
    }
    
 
    </>
  )
}

export default Home