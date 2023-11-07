import React from "react";
import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.flex, styles.flexRow, styles.topRow]}>
                <View style={[styles.topLittleBox, {backgroundColor: 'blue'}]}/>
                <View style={[styles.topLittleBox, {backgroundColor: 'lightblue'}]}/>
                <View style={[styles.topLittleBox, {backgroundColor: 'red'}]}/>
            </View>
            <View style={[styles.flex, styles.flexRow, styles.middleRow]}>
                <View style={styles.cyanBox}/>
                <View style={[styles.flex, styles.flexCenter, styles.greenBox]}>
                    <View style={styles.yellowBoxStatic}/>
                    <View style={styles.yellowBoxAbsoluteTop}/>
                    <View style={styles.yellowBoxAbsoluteBottom}/>
                </View>
            </View>
            <View style={[styles.flex, styles.flexRow, styles.bottomRow]}>
                <View style={[styles.bottomLittleBox, {backgroundColor: 'pink'}]}/>
                <View style={[styles.bottomLittleBox, {backgroundColor: 'purple'}]}/>
            </View>
            <View style={[styles.flex, styles.flexRow, styles.bottomRowLast]}>
                <View style={[styles.bottomLittleBox, {backgroundColor: 'purple'}]}/>
                <View style={[styles.bottomLittleBox, {backgroundColor: 'pink'}]}/>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        height: '100%',
        flex: 1,
    },
    flex: {
        display: 'flex',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    topLittleBox: {
        width: '33.33%',
    },
    bottomLittleBox: {
        width: '33.33%',
    },
    topRow: {
        height: '15%',
    },
    middleRow: {
        height: '50%',
        width: '100%',
    },
    bottomRow: {
        height: '25%',
        justifyContent: 'space-between',
    },
    bottomRowLast: {
        height: '10%',
        justifyContent: 'space-around',
    },
    cyanBox: {
        backgroundColor: 'cyan',
        width: '16.6%',
    },
    greenBox: {
        backgroundColor: 'green',
        flex: 1,
    },
    yellowBoxStatic: {
        backgroundColor: 'yellow',
        width: 150,
        height: 150,
    },
    yellowBoxAbsoluteTop: {
        backgroundColor: 'yellow',
        position: 'absolute',
        width: 20,
        height: 20,
        top: '25%',
        left: 0,
    },
    yellowBoxAbsoluteBottom: {
        backgroundColor: 'yellow',
        position: 'absolute',
        width: 20,
        height: 20,
        bottom: '25%',
        right: 0,
    },
});
