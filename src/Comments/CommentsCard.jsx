const CommentsCard = ({comments}) => {

return(
    <ol>
    {comments.map((comment) => {
        return (
            <li key={comment.comment_id} className="commentsCards">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <p>{comment.created_at}</p>
            </li>
        )
    })
}
</ol>)

}

export default CommentsCard;