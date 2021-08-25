import React from 'react'
import { Card, Data, Image, Name, Span } from './User.styles'

const User = ({ image, name, last, city, country }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Name>
        {name} {last}
      </Name>
      <Data>
        City: <Span>{city}</Span>
      </Data>
      <Data>
        Country: <Span>{country}</Span>

      </Data>
    </Card>
  )
}

export default User
