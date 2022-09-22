import client from 'axios'

const instance = client.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL
});

export function axios() {
  return instance
}
