import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  width: 180px;
  height: 180px;

  background: #ffffff;
  border-radius: 5px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`

export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const Name = styled.h6`
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: center;
  letter-spacing: 0.2px;

  /* primary-color */

  color: #23a6f0;
  margin: 0;
`

export const Data = styled.h5`
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 0.1px;

  /* text-color */

  color: #252b42;
  margin: 0;
`

export const Span = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-align: center;
  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;
`
