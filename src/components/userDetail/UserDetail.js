import React from 'react'
import { useHistory, useLocation } from 'react-router'
import {
  Card,
  Data,
  Image,
  Username,
  Name,
  Span,
  Content,
  Mail,
  Button
} from './UserDetail.styles'

const UserDetail = () => {
  let { state } = useLocation()
  let history = useHistory()

  const goHomeBtn = () => history.push('/')

  return (
    <Card>
      <Image src={state.picture.large} alt={state.name.first} />
      <Content>
        <Username>{state.login.username}</Username>
        <Name>
          {state.name.first} {state.name.last}
        </Name>
        <Data>
          City: <Span>{state.location.city}</Span>
        </Data>
        <Data>
          Country: <Span>{state.location.country}</Span>
        </Data>
        <Mail>{state.email}</Mail>
        <Button onClick={() => goHomeBtn()}>Back &#8592;</Button>
      </Content>
    </Card>
  )
}

export default UserDetail
