import axios from 'axios'
import { bgfetch } from '../utils/bgfetch'
import { isKey } from '../utils/ccutil'

const BITCLOUT_API = 'https://api.bitclout.com'
const API_URL = 'https://cloutception.club/api/info'

async function bitcloutRequest(url, data) {
  return post(`${BITCLOUT_API}/${url}`, data)
}

async function get(url) {
  try {
    const response = await bgfetch(`${API_URL}/${url}`)
    return response
  } catch (e) {
    // SHOW NOTIFICATION HERE, throw error
    return null
  }
}

async function post(url, data) {
  try {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    return response.data
  } catch (e) {
    // SHOW NOTIFICATION HERE, throw error
    return null
  }
}

export async function getWallet(key) {
  return await get(`wallet/${key}`)
}

export async function getUserStatus(key) {
  return await get(`user-status/${key}`)
}

export async function getHistory(key) {
  return await get(`history/${key}`)
}

export async function getProfile(key) {
  return bitcloutRequest('get-profiles', {
    PublicKeyBase58Check: isKey(key) ? key : '',
    Username: isKey(key) ? '' : key
  })
}
