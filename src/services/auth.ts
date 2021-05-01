import { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default api
