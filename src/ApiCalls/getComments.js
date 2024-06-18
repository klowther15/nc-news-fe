import axios from "axios";

const getComments = (id) => {
    return axios.get(`https://nc-news-kgw0.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export {getComments};