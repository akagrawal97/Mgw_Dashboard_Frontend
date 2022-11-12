import axios from 'axios';
const URL = "http://localhost:8080";

const submitData = async(data) => {
    let res = "dummy data";
    try {
        res = await axios.post(URL, data);
        console.log("result: "+JSON.stringify(res));
    } catch(exception) {
        console.log("exception sending the post request: "+exception);
    } finally {
        return res;
    }
}

export default submitData;