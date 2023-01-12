import * as R from 'react-native'
import styled from 'styled-components'

export const DetailWrap = styled(R.View)`
    flex:1;
    align-items: center;
    background-color: #01001A;
`

export const UserInfoWrap = styled(R.View)`
    width:90%;
    height:120px;
    margin-bottom: -10px;
`

export const UserWelcomeText = styled(R.Text)`
    margin-top: 20px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    opacity: 0.6;
`

export const UserWelcomeName = styled(R.Text)`
    margin-top: -5px;
    color: #ccc;
    font-size: 30px;
    font-weight: 800;
`

interface Props {
    height: string;
    color: string;
}

export const ChartTextWrap = styled(R.View)`
    width: 90%;
`

export const ChartText = styled(R.Text)`
    margin-top: 12px;
    font-size: 16px;
    color: #ccc;
    margin-right: auto;
`

export const ChartSubText = styled(R.Text)`
    font-size: 14px;
    color: white;
    margin-right: auto;
`

export const Chart = styled(R.View)`
    width: 28px;
    margin: auto 8px 0 8px;
    height: ${(props: Props) => props.height};
    background-color: ${(props: Props) => props.color ? props.color : 'white'};
`

export const ChartTextsWrap = styled(R.View)`
    width:90%;
    height: 30px;
    flex-direction: row;
    margin-top: 3px;
    margin-left: 90px;
`

export const ChartTexts = styled(R.Text)`
    color:white;
    font-size: 11px;
    margin: 0 6px;
`

export const ChartWrap = styled(R.View)`
    width: 80%;
    height: 140px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-left-width: 2.2px;
    border-bottom-width: 2.2px;
    border-color: #ccc;
`

export const Line = styled(R.View)`
    width: 90%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
`

export const WeekChartWrap = styled(R.View)`
    flex-direction: row;
    margin-top: 20px;
`

export const WeekChartTexts = styled(R.View)`
    align-items: center;
    margin-right: 4px;
`

export const WeekChartText = styled(R.Text)`
    color:white;
    margin-top: 3px;
    font-size: 12px;
`