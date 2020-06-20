import React from 'react';
import {Container, Option , Title, Img} from './styles';
import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';
import img13 from '../../images/avatar.png';


const itemsImages = [   
    {
        key: String(Math.random()),
        img: img8,
        title: "Universitário! Cadastre-se e ganhe mais cashback",
        bgColor: "#172c4a"
    },
    {
        key: String(Math.random()),
        img: img9,
        title: "Compre o que quiser sem sair de casa",
        bgColor: "#6a0159"
    },
    {
        key: String(Math.random()),
        img: img10,
        title: "Pague um amigo a distância",
        bgColor: "#4139c8"
    },
    {
        key: String(Math.random()),
        img: img11,
        title: "Pague suas contas sem sair de casa",
        bgColor: "#00ab4b"
    },
    {
        key: String(Math.random()),
        img: img12,
        title: "Adicione dinheiro no PicPay",
        bgColor: "#ba2f76"
    },
    {
        key: String(Math.random()),
        img: img13,
        title: "Cobre um amigo sem sair de casa",
        bgColor: "#2655a6"
    }
]

export default function Tips(){
    return (
        <Container>
            {
                itemsImages.map((iten) => (
                    <Option key={iten.key} bgColor={iten.bgColor}>                        
                        <Title>{iten.title}</Title>
                        <Img source={iten.img}/> 
                    </Option>
                ))
            }      
        </Container>
    );
}