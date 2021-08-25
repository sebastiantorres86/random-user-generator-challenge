import React, { useState, useEffect } from 'react'
import { User } from '../../components'
import { Container, StyledLink } from './Home.styles'

const randomUserURL =
  'https://randomuser.me/api/?seed=cbe9420cab24e766&results=50'

const Home = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(randomUserURL)
        const data = await response.json()

        setData(data)
        console.log(data.results)
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
        {data.results.map((person, index) => (
          <StyledLink to={{ pathname: 'details', state: person }} key={index}>
            <User
              image={person.picture.thumbnail}
              name={person.name.first}
              last={person.name.last}
              city={person.location.city}
              country={person.location.country}
            />
          </StyledLink>
        ))}
      </Container>
    )
  }
}

export default Home
