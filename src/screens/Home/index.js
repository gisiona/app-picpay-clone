import React from 'react';
import {Wrapper, Header, BalanceContainer, BalanceTitle, Balance, ContainerScrollView } from './styles';
import { MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons'; 
import Suggestions from '../Suggestions';
import Activities from '../Activities'
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';



export default function Home() {
  return (    
    <Wrapper>
      <ContainerScrollView>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="#10c86e" />
          <BalanceContainer>
              <BalanceTitle>Meu Saldo</BalanceTitle>
              <Balance>R$ 10,00</Balance>          
          </BalanceContainer>          
          <AntDesign name="gift" size={24} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </ContainerScrollView>
    </Wrapper>
  )
}