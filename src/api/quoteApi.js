import axios from 'axios';

export default axios.create({
  baseURL: "https://gist.githubusercontent.com/balonet/ca75e757cb292f7637505ddcb8eba8df/raw/ae885395d516df26b6c5aba657273251437b6619/Quotations.json"
});