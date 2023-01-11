import React, { useContext } from 'react';
import * as R from 'react-native';
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
        <HomeView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <HomeText onPress={() => navigation.navigate('Details')}>home</HomeText>
        </HomeView>
    );
};

export default Home;