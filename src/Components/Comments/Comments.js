import React from 'react'
import Comment from '../Comment/Comment'

const Comments = ({commentsOfThisPost}) => {
  return (
    <div className='comments'>
        {
            commentsOfThisPost.map((comment) => <Comment id={comment.id} commentsOfThisPost={comment} />)
        }
    </div>
  )
}

export default Comments