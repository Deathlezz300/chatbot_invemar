import axios from "axios";

const ChatApi=axios.create({
    baseURL:'http://172.27.5.105:8000'
})

export default ChatApi;