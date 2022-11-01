import axios from "axios";


export const getTodoList =  async (query) => {

    const res = await axios.get(`http://localhost/api/sampleTodos/list?page=${query.page}&size=${query.size}`)

    return res.data

}


const multipartHeader = {"Content-Type": "multipart/form-data"}

export const postSend = async (sampleTodo) => {
    const formData = new FormData()

    for (const prop in sampleTodo) {

        if(prop !== 'files') {
            formData.append(prop, sampleTodo[prop])
        }
    }

    for(let i = 0; i < sampleTodo.files.length; i++){
        formData.append("files", sampleTodo.files[i])
    }


    const res = await  axios.post(`http://localhost/api/sampleTodos/`, formData, {
        headers:multipartHeader })

    return res.data

}


export const getTodo = async (id) => {

    const res = await axios.get(`http://localhost/api/sampleTodos/${id}`)

    return res.data

}

export const deleteTodo = async (id) => {

    const res = await axios.delete(`http://localhost/api/sampleTodos/${id}`)

    return res.data

}

export const putTodo = async (sampleTodo) => {
    const formData = new FormData()

    console.log("-----------------------------")
    console.log(sampleTodo)
    for (const prop in sampleTodo) {

        console.log(prop)

        if(prop !== 'files') {
            formData.append(prop, sampleTodo[prop])
        }
    }

    console.log(sampleTodo.newFiles)

    if(sampleTodo.newFiles) {
        for (let i = 0; i < sampleTodo.newFiles.length; i++) {
            formData.append("files", sampleTodo.newFiles[i])
        }
    }


    const res = await  axios.put(`http://localhost/api/sampleTodos/${sampleTodo.id}`, formData, {
        headers:multipartHeader })

    return res.data

}