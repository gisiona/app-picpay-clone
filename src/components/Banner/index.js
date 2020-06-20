import React from 'react';
import img13 from '../../images/13.png';
import {Container,Details,Title,Description, Img} from './styles';

export default function Banner(){
    return (
        <Container>
            <Details>
                <Title>Pague um amigo</Title>
                <Description>Matenha suas parcerias em dia, use o PicPay para fazer pagamentos.</Description>
            </Details>
            <Img source={img13} />
        </Container>
    );
}