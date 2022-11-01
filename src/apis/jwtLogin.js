import axios from "axios";


export const makeTokens =  async (login) => {

    const res = await axios.post('http://localhost/makeTokens', login)

    return res.data
}