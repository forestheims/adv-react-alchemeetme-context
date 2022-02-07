import { createContext, useState, useEffect, useContext } from 'react'
import fetchUser from '../services/user'

const UserContext = createContext()

const UserProvider = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])
}
