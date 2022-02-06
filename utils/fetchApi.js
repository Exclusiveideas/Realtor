import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '37a02fdb29mshf1d79efa7ce95ebp1aac32jsnbb5e86fe18bb',
    },
  });
  return data;
}
