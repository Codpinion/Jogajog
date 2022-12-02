const Comment = ({commentsOfThisPost}) => {
    const {name, email} = commentsOfThisPost;
    console.log(commentsOfThisPost);
  return (
    <div className="single-comment">
        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}

export default Comment