import axios from "axios";

const getSingleArticle = (id) => {
    console.log(id)
    return axios.get(`https://nc-news-kgw0.onrender.com/api/articles/${id}`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        return "ERROR"
    })

}

export {getSingleArticle};