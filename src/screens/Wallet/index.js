import React, {useState} from 'react';
import { Switch } from 'react-native';
import { Feather ,MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import { Wrapper, 
    ContainerWrapperScrollView,
    Header, 
    HeaderContainer, 
    Title, 
    BalanceContainer, 
    Value,
    Bold, 
    SubTitle,
    EyeButton, 
    ActionsButton, 
    ActionOption, 
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardDetailsTitle,
    CardDetailsInfo,
    ImgCreditCard,
    AddContainer,
    AddContainerCardButton,
    AddContainerTitle,
    AddContainerCupom,
    AddContainerCupomButton,
    AddContainerCupomTitle

} from './styles'
import creditCardImg from '../../images/credit-card.png';

export default function Wallet(){
    
    const [isVisible, setIsVisible] = useState(true);
    const [isEnabled, setIsEnabled] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
        console.log(isVisible)
    }

    function handleToggleBalanceEnanble(){
        setIsEnabled((prevState) => !prevState);
        console.log(isVisible)
    }

    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (        
        <ContainerWrapperScrollView>
            <Header colors={
                isEnabled ? ["#52E78C", "#1ab563"] : ["#d3d3d3", "#868686"]
            } >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? "524,00" : "----"}</Bold>
                        </Value> 
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={25} color="#fff" />            
                        </EyeButton>      
                    </BalanceContainer>
                    <SubTitle>Seu saldo rende 110% do CDI</SubTitle>

                    <ActionsButton>
                        <ActionOption>
                            <MaterialCommunityIcons name="bank" size={24} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </ActionOption>

                        <ActionOption>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </ActionOption>
                    </ActionsButton>

                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch
                    trackColor={{ false: "#fff", true: "#fff" }}
                    thumbColor={isEnabled ? "#10c86e" : "#8d8d8d"}
                    ios_backgroundColor="#fff"
                    onValueChange={handleToggleBalanceEnanble}
                    value={isEnabled}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
                <CardBody>
                    <Card>
                        <CardDetails>
                            <CardDetailsTitle>Cadastre seu cartão de crédito</CardDetailsTitle>
                            <CardDetailsInfo>Cadastre seu cartão de crédito para poder fazer pagamento mesmo quando não tiver saldo PicPay.</CardDetailsInfo>
                        </CardDetails>

                        <ImgCreditCard source={creditCardImg} resizeMode="contain"/>
                    </Card>

                    <AddContainer>
                        <AntDesign name="pluscircleo" size={24} color="#10c86e" />
                        <AddContainerCardButton>                            
                            <AddContainerTitle>Adicionar cartão</AddContainerTitle>
                        </AddContainerCardButton>                        
                    </AddContainer>

                    <AddContainerCupom>
                        <MaterialCommunityIcons name="cash" size={24} color="#10c86e" />
                        <AddContainerCupomButton>                            
                            <AddContainerCupomTitle>Usar código promocional</AddContainerCupomTitle>
                        </AddContainerCupomButton>                        
                    </AddContainerCupom>
                    
                </CardBody>
                
            </PaymentMethods>
        </ContainerWrapperScrollView>
    );
}