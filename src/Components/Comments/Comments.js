import React from 'react'
import Comment from '../Comment/Comment'

const Comments = ({commentsOfThisPost}) => {
  return (
    <div className='comments' style={{border: '1px solid blue', borderRadius: '8px', padding: '5px 10px'}}>
        {
            commentsOfThisPost.map((comment) => <Comment key={comment.id} commentsOfThisPost={comment} />)
        }
    </div>
  )
}

export default Comments