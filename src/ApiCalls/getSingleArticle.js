import axios from "axios";

const getSingleArticle = (id) => {
    return axios.get(`https://nc-news-kgw0.onrender.com/api/articles/${id}`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        return "ERROR"
    })

}

export {getSingleArticle};