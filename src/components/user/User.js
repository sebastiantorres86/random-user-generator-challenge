import React from 'react'
import { Card, Data, Image, Name, Span } from './User.styles'

const User = ({ person }) => {
  return (
    <Card>
      <Image src={person.picture.large} alt='person.name.first' />
      <Name>
        {person.name.first} {person.name.last}
      </Name>
      <Data>
        City: <Span>{person.location.city}</Span>
      </Data>
      <Data>
        Country: <Span>{person.location.country}</Span>
      </Data>
    </Card>
  )
}

export default User
