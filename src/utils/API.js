import axios from 'axios'

export default function API() {
    return axios.get('https://randomuser.me/api/?results=30')
}
