import axios from "axios";

const ChatApi=axios.create({
    baseURL:'http://172.27.5.153:8000'
})

export default ChatApi;