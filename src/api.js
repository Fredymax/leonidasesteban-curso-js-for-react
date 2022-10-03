import { API_KEY, END_POINT, LANGUAGE } from "./constants.js";

class API {
  constructor(API_KEY) {
    this.settings = {
      api_key: API_KEY,
      language: LANGUAGE,
    };
  }
  get discoverMovies() {
    const settings = new URLSearchParams(this.settings).toString();
    return `${END_POINT}discover/movie?${settings}`;
  }
  async movies(params = {}) {
    try {
      const searchParams = new URLSearchParams(params).toString();
      const response = await fetch(`${this.discoverMovies}&${searchParams}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return { status: "error" };
    }
  }
}

export default new API(API_KEY);
