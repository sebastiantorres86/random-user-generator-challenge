import styled from 'styled-components'

export const Card = styled.article`
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 327px;
  height: auto;
  margin-left: 30px;

  background: #ffffff;
  border-radius: 5px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 35px;

  /* width: 325px; */
  height: 276px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Username = styled.h6`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.2px;

  /* muted-color */

  color: #bdbdbd;
  margin: 0;
`

export const Name = styled.h6`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: 0.1px;

  /* primary-color */

  color: #23a6f0;
  margin: 0.5rem 0;
`

export const Data = styled.h5`
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  letter-spacing: 0.2px;
  text-align: left;
  letter-spacing: 0.1px;

  /* text-color */

  color: #252b42;
  margin: 0.5rem 0;
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

export const Mail = styled.h6`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;
  margin: 0;
`

export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.2px;

  /* primary-color */

  color: #23a6f0;
  background-color: transparent;
  border: none;
  margin-top: 0.5rem;
  cursor: pointer;
  padding-left: 0;
`
