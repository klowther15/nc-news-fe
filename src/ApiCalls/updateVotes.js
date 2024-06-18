import axios from "axios";

const updateArticleVotes = (article_id, inc_votes) => {
    return axios.patch(`https://nc-news-kgw0.onrender.com/api/articles/${article_id}`, {inc_votes}).then((response) => {
        return response.data
    })
    .catch((err) => {
        return "ERROR!"
    })
}

export {updateArticleVotes};