import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => navigation.navigate('Details')}>home</Text>
        </View>
    );
};

export default HomeScreen;