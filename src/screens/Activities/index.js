import React from 'react';
import { Feather ,MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Datails,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
 } from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <Container horizontal>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você </Bold> pagou a <Bold>@andreia.ribeiro</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Gisiona Costa</UserName>
                </CardBody>

                <CardFooter>
                    <Datails>
                        <Value>R$ 19,00</Value>
                        <Divider></Divider>

                        <Feather name="lock" size={24} color="black" />
                        <Date>há 2 anos</Date>
                    </Datails>

                    <Actions>
                        <Option>
                        <MaterialCommunityIcons name="comment-outline" size={24} color="black" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>

                    <Actions>
                        <Option>
                            <AntDesign name="hearto" size={24} color="black" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>

                </CardFooter>
            </Card>

            

        </Container>
    );
}
