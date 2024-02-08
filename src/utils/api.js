import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  import.meta.env.TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzhkNmQ3YzBiYWZkODRjZTJjNTY5ZDFjNTU2MjkyYiIsInN1YiI6IjY1YzM1NDc5OTYwMzMxMDE4NGI5MDg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42ZTTa57f_3LdKgs-LNG8yoGKWH9NurkkgkxbQS4rAk";

const headers = {
  Authorization: "bearer " + TOKEN,
};

export async function fetchingApi(url, params) {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}
