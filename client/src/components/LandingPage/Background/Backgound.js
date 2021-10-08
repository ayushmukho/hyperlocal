import React from 'react'
import styled from 'styled-components'

export const IMac1 = styled.div`
  background-color: white;
  overflow: hidden;
  padding: 0 611px 24.29px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`
export const Vector = styled.img`
  width: 16.59%;
  height: 20.24%;
`
export const VectorTwo = styled.div`
  width: 7.47%;
  height: 6.45%;
  background-color: yellow;
  margin-bottom: 86px;
  margin-left: 619px;
  border-radius: 50%;
`
export const FlexWrapperTwo = styled.div`
  margin-bottom: 109.79px;
  padding: 0 0 0 69px;
  display: flex;
  align-items: flex-start;
`
export const FlexWrapperFour = styled.div`
  margin-right: 17.65px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const VectorThree = styled.img`
  width: 99.91%;
  height: 54.06%;
  margin-bottom: 44.86px;
  margin-left: 0.46px;
`
export const VectorFour = styled.img`
  width: 94.73%;
  height: 26.5%;
`
export const VectorFive = styled.img`
  width: 18.1%;
  height: 64.56%;
  margin-top: 36.95px;
`
export const FlexWrapperThree = styled.div`
  padding: 0 0 0 27.99px;
  display: flex;
  align-items: flex-start;
`
export const VectorSix = styled.img`
  width: 12.5%;
  align-self: stretch;
  margin-right: 318.76px;
  object-fit: cover;
`
export const VectorSeven = styled.div`
  width: 24.02%;
  height: 77.4%;
  background-color: yellow;
  margin-top: 0.41px;
  border-radius: 50%;
`
export const RelativeWrapperOne = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 721.3px;
  top: 57px;
`
export const VectorEight = styled.img`
  width: 101.58%;
  height: 96.14%;
  position: absolute;
  right: -33px;
  top: -57px;
`
export const FlexWrapperOne = styled.div`
  background-size: 100% 100%;
  background-position: center;
  background-image: url('https://static.overlay-tech.com/assets/3ff9a1e5-c84b-463d-871a-28d1cd4d1c8f.png');
  padding: 504px 401px 30px 51.7px;
  position: relative;
`
export const VectorNine = styled.img`
  width: 100%;
  height: 100%;
`

const IMac1Component = () => {
  return (
    <IMac1>
      <Vector
        alt=''
        src='https://static.overlay-tech.com/assets/d7fb6779-807e-48f2-91f2-247d050ec31c.svg'
      />
      <VectorTwo />
      <FlexWrapperTwo>
        <FlexWrapperFour>
          <VectorThree
            alt=''
            src='https://static.overlay-tech.com/assets/13d9910e-d112-4210-96e0-21f7c1d5a532.svg'
          />
          <VectorFour
            alt=''
            src='https://static.overlay-tech.com/assets/57c7b06b-a9b5-43e2-b8d4-fbf78c2bba7a.svg'
          />
        </FlexWrapperFour>
        <VectorFive
          alt=''
          src='https://static.overlay-tech.com/assets/7d5b5d14-5edc-46f6-9d21-8b4e8602f07c.png'
        />
      </FlexWrapperTwo>
      <FlexWrapperThree>
        <VectorSix
          alt=''
          src='https://static.overlay-tech.com/assets/a8cc39ab-852f-4c98-8561-06ce9c656db3.png'
        />
        <VectorSeven />
      </FlexWrapperThree>
      <RelativeWrapperOne>
        <VectorEight
          alt=''
          src='https://static.overlay-tech.com/assets/837e538f-c3fe-4931-93b2-612f070f27e7.svg'
        />
        <FlexWrapperOne>
          <VectorNine
            alt=''
            src='https://static.overlay-tech.com/assets/3a1d583c-7625-4355-837e-9f86e7daa749.png'
          />
        </FlexWrapperOne>
      </RelativeWrapperOne>
    </IMac1>
  )
}

export default IMac1Component
