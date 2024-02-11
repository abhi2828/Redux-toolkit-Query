const PostCard = ({post}:{post:Post}) => {
  return (
    <div className="postCard">
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
    </div>
  )
}

export default PostCard