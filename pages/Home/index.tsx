import React, { useContext } from 'react';
import * as R from 'react-native';
import WebView from 'react-native-webview';
import styled from 'styled-components';
import { UserContext } from '../../App';

const HomeView = styled(R.View)`
    flex: 1;
    background-color: #01001A;
`

const HomeText = styled(R.Text)`
    color:white;
`

const Home = ({ navigation }: any) => {
    const user = useContext(UserContext);

    return (
        <WebView source={{ uri: 'https://bssm.kro.kr' }} />
    );
};

export default Home;