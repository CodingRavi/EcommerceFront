import axios from "axios"
// const Base_Url = "http://localhost:5000/api/"
// const Base_Url = "https://ecommerceapi-m76v.onrender.com/api"
const Base_Url = "https://ecommerce-server-5tn8.onrender.com/api"
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzJjNzg5M2Q5ZDE3OTU4YTJiODY0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDgzOTE5OCwiZXhwIjoxNjc1MDk4Mzk4fQ.XB-XeM73gLE8O1w_Ez9bkq2mrAEGvtuFYrmGU-Ajmak"

export const publicrequest = axios.create({
    baseURL:Base_Url
})

export const userRequest = axios.create({
    baseURL:Base_Url,
    headers:{token:`Bearer ${Token}`}
})