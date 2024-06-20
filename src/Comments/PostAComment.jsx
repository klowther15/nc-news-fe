import { useState , useEffect } from "react";
import { postAComment } from "../ApiCalls/postComment";

const PostAComment = ({article_id}) => {

    const [comment, setComment] = useState("")
    
    const handleCommentInput = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postAComment(article_id, comment)
        .then(() => {
            alert("Comment successfully posted!")
            setComment("")
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p></p>
                <textarea className="commentInputBox" required value={comment} onChange={handleCommentInput} placeholder="Insert your comment here"></textarea>
            </label>
            <button>submit!</button>
        </form>
    )
}

export default PostAComment;