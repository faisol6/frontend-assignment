import axios from 'axios';

export async function getDummyData() {
    const url = process.env.REACT_APP_API;
    const _res = await  axios.get(`${url}`);
    return _res;
 }
 