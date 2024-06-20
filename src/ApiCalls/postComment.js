import axios from "axios"

const postAComment = (id, comment) => {
    return axios.post(`https://nc-news-kgw0.onrender.com/api/articles/${id}/comments`, {
        username: "cooljmessy",
        body: comment})
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err
    })
}

export {postAComment};