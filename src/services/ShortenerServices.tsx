import ShortenerModel from "@models/ShortenerModel";
import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL

export const createShortener = async (link: string): Promise<ShortenerModel | null> => {
  try {
    const response = await axios.post(`${url}/shortener`, { url: link })
    return response.data
  } catch (error) {
    return null
  }
}