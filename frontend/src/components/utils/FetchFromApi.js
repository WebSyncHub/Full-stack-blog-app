import axios from "axios";
const FetchFromAPI = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

export default FetchFromAPI