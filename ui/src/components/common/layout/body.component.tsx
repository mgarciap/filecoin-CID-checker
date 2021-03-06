import React from 'react'
import styled from 'styled-components'

const BodyWrapper = styled.div`
  margin: 48px auto 20px auto;
`

export const Body: React.FC = props => {
  const { children, ...restProps } = props

  return <BodyWrapper {...restProps}>{children}</BodyWrapper>
}
