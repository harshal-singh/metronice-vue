import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface User {
  email: string
  name?: string
  password?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => user.value !== null)

  // Dummy login - accepts any email/password
  function login(email: string, password: string) {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        user.value = {
          email,
          name: email.split('@')[0],
          password
        }
        localStorage.setItem('auth_user', JSON.stringify(user.value))
        resolve(user.value)
      }, 500)
    })
  }

  // Dummy signup - accepts any email/password
  function signup(email: string, password: string, name?: string) {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        user.value = {
          email,
          name: name || email.split('@')[0],
          password
        }
        localStorage.setItem('auth_user', JSON.stringify(user.value))
        resolve(user.value)
      }, 500)
    })
  }

  // Logout
  function logout() {
    user.value = null
    localStorage.removeItem('auth_user')
  }

  // Check if user is logged in from localStorage
  function checkAuth() {
    const storedUser = localStorage.getItem('auth_user')
    if (storedUser) {
      try {
        user.value = JSON.parse(storedUser)
      } catch (error) {
        console.error('Error checking auth:', error)
        localStorage.removeItem('auth_user')
        user.value = null
      }
    } else {
      user.value = null
    }
  }

  // Initialize auth check on store creation
  if (typeof window !== 'undefined') {
    checkAuth()
  }

  return {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
    checkAuth
  }
})

