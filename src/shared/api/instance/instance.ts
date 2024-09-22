import axios from 'axios'

export const BASE_URL =
  'http://localhost:8080/http://transstage1.iwayex.com/transnextgen/v3'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})
