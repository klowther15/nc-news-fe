import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getComments } from "../ApiCalls/getComments";
import CommentsCard from "./CommentsCard"
import Header from "../homepageComponents/Header";
import Nav from "../homepageComponents/Nav";

const CommentsList = () => {

    const [comments, setComments] = useState(null)
    const { article_id } = useParams()

    useEffect(() => {
        getComments(article_id).then((commentsData) =>{
            setComments(commentsData)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [article_id])

    if(!comments){
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div>
        <CommentsCard comments={comments}/>
        </div>
    )
}

export default CommentsList;