import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ButtonArea from '../Componets'
import { FlexCont, Wrapper } from '../styles/globals'

export default function Home() {
  return (
    <Wrapper>
      <FlexCont color="red">
      <ButtonArea name="Zahir"/>
      </FlexCont>
     
      
    </Wrapper>
  )
}
