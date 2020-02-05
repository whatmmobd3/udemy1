import axios from 'axios'

const KEY = 'AIzaSyDSi2ZzNBkP8nfn_UBYzt8l1XVdJXXqjrc';

export const baseParams = {
    part: "snippet",
    maxResults: 10,
    type: 'video',
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
})