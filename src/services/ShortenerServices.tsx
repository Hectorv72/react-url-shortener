import ShortenerModel from "@models/ShortenerModel";
import axios from "axios";

const url = import.meta.env.VITE_APP_SERVER_URL + '/api'

export const createShortener = async (link: string): Promise<ShortenerModel | null> => {
  try {
    const response = await axios.post(`${url}/shortener`, { url: link })
    return response.data
  } catch (error) {
    return null
  }
}