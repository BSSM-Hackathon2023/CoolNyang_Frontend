import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import * as C from './style'
import { WebView } from 'react-native-webview';

const Detail = () => {
    return (
        <WebView source={{ uri: 'http://10.150.151.99:3000' }} />
    );
};

export default Detail;