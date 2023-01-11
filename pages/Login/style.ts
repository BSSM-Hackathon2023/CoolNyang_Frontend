import styled from "styled-components"
import * as R from 'react-native';

export const LoginWrap = styled(R.View)`
    flex: 1;
    background-color: #01001A;
    align-items: center;
`

export const WelcomeWrap = styled(R.View)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 90px 0 100px 0;
`

export const LoginText = styled(R.Text)`
    color: white;
    font-weight:700;
    font-size:14px;
`

export const LoginTitleText = styled(R.Text)`
    color: white;
    font-weight:700;
    font-size:28px;
`
export const TextInput = styled(R.TextInput)`
    width: 330px;
    height: 40px;
    border-bottom-width: 2px;
    border-bottom-color: rgba(128,128,128,0.6);
    color:white;
    padding-left: 10px;
    font-weight:600;
    margin: 11px 0 11px 0;
`

export const LoginButton = styled(R.Pressable)`
    background-color: #5014CA;
    margin-top: 40px;
    width:330px;
    height:46px;
    border-radius: 999px;
    justify-content: center;
    align-items: center;    
`

export const LoginButtonText = styled(R.Text)`
    color:white;
    font-weight: 600;
    font-size: 13px;
`

export const SignupButton = styled(R.Pressable)`
    background-color: #434343;
    margin-top: 20px;
    width:330px;
    height:46px;
    border-radius: 999px;
    justify-content: center;
    align-items: center;
`

export const GoLoginText = styled(R.Text)`
    margin-top: 20px;
    color:rgb(130, 130, 130);
    font-weight: 600;
    font-size: 12px;
`