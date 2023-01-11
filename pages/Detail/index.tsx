import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Detail = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => navigation.navigate('Home')}>detail</Text>
        </View>
    );
};

export default Detail;