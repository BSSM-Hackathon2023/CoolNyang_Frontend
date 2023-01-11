import React, { useContext, useEffect, useState } from 'react';
import { SetUserContext, UserContext } from '../../App';
import * as C from './style'

const LoginScreen = ({ navigation }: any) => {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const user = useContext(UserContext);
    const setUser = useContext(SetUserContext);

    const onPressLogin = () => {
        setUser({ ...user, isLogin: true })
    }

    return (
        <C.LoginWrap>
            <C.WelcomeWrap>
                <C.LoginText>Welcome</C.LoginText>
                <C.LoginTitleText>서비스이름</C.LoginTitleText>
            </C.WelcomeWrap>
            {isLoginPage ?
                <>
                    <C.TextInput placeholder='아이디를 입력해주세요.' placeholderTextColor='rgba(128,128,128,0.8)' />
                    <C.TextInput placeholder='비밀번호를 입력해주세요.' placeholderTextColor='rgba(128,128,128,0.8)' />
                    <C.LoginButton onPress={onPressLogin}>
                        <C.LoginButtonText>로그인</C.LoginButtonText>
                    </C.LoginButton>
                    <C.SignupButton onPress={() => setIsLoginPage(!isLoginPage)}>
                        <C.LoginButtonText>회원가입하기</C.LoginButtonText>
                    </C.SignupButton>
                </> :
                <>
                    <C.TextInput placeholder='사용할 아이디를 입력해주세요.' placeholderTextColor='rgba(128,128,128,0.8)' />
                    <C.TextInput placeholder='사용할 이름을 입력해주세요.' placeholderTextColor='rgba(128,128,128,0.8)' />
                    <C.TextInput placeholder='사용할 비밀번호를 입력해주세요.' placeholderTextColor='rgba(128,128,128,0.8)' />
                    <C.LoginButton>
                        <C.LoginButtonText>회원가입</C.LoginButtonText>
                    </C.LoginButton>
                    <C.GoLoginText onPress={() => setIsLoginPage(!isLoginPage)}>
                        로그인하기
                    </C.GoLoginText>
                </>}
        </C.LoginWrap>
    );
};

export default LoginScreen;