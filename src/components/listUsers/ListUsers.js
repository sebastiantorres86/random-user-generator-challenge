import React, { useState, useEffect } from 'react'
import User from '../user'
import { Container } from './ListUsers.styles'

const randomUserURL = 'https://randomuser.me/api/?results=50'

const ListUsers = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(randomUserURL)
        const data = await response.json()

        setData(data)
        console.log(data)
        setIsLoaded(true)
      } catch (e) {
        setError(error)
        setIsLoaded(true)
      }
    }
    fetchData()
  }, [error])

  if (error) return <div>Error: {error.message}</div>
  if (!isLoaded) return <div>...loading</div>
  else {
    return (
      <Container>
        {data.results.map(person => (
          <User key={person.login.uuid} person={person} />
        ))}
      </Container>
    )
  }
}

export default ListUsers
