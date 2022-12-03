const axios = require("axios");

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f470aaa601msh5ddef50a84e33bcp1305a7jsn1dae4e0e793e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data
}

