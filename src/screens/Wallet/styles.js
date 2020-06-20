import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const ContainerWrapperScrollView = styled.ScrollView`
    flex: 1;
    background: #000;
`;


export const Wrapper = styled.View`
   
`;

export const Header = styled(LinearGradient)`
    height: 270px;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin: 5px 0px;
    flex-direction: row;
    align-items: center;    
`;

export const Value = styled.Text`
    color: #fff;    
    font-size: 30px;    
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    padding-left: 10px;
`;

export const ActionsButton  = styled.View`
    flex-direction: row;
    margin-top: 35px;
`;

export const ActionOption = styled.TouchableOpacity`   
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255,255,255,0.6);
    border-radius: 20px;
    height:50px;
    width: 150px;
    padding: 10px;
    margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const UseBalance = styled.View`
    background: #1c1c1e;
    height:50px;
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 400;
`;


export const PaymentMethods = styled.View`
    padding: 0 10px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
    padding-top: 10px;
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 10px;
    padding: 15px;
    flex-direction: row;
`;

export const CardBody = styled.View`
    
`;

export const CardDetails  = styled.View`
    flex: 1; 
    margin-right: 20px;  
`;

export const CardDetailsTitle  = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const CardDetailsInfo  = styled.Text`
    color: rgba(255,255,255,0.8);;
    font-size: 16px;
    margin-top: 15px;
`;

export const ImgCreditCard  = styled.Image`
`;

export const AddContainer  = styled.View`
    background: #1e222b;
    flex-direction: row;
    border-radius: 8px;
    align-items: center;
    padding: 15px;
    margin-top: 1px;
`;

export const AddContainerCardButton  = styled.TouchableOpacity`
    
`;

export const AddContainerTitle  = styled.Text`
    color: #10c86e;
    font-size: 16px;
    font-weight: bold;   
    padding-left: 10px;
`;

export const AddContainerCupom  = styled.View`
    flex-direction: row;    
    margin-top: 30px;
    justify-content: center;
`;

export const AddContainerCupomButton  = styled.TouchableOpacity`
    
`;


export const AddContainerCupomTitle  = styled.Text`
    color: #10c86e;
    font-size: 18px;
    font-weight: 500;   
    text-decorationLine: underline;
    padding: 0 5px;
`;


/*

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 15px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Avatar = styled.Image``;

export const Description = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-left:15px;
`;

export const CardBody = styled.View`
    margin-top: 20px
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const CardFooter  = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
`;
export const Datails  = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    color: rgba(255,255,255,0.8);
`;


export const Date = styled.Text`
    color: #fff;    
    margin: 10px;
`;



export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;

*/