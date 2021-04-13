import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    Body,
    Button,
    Header,
    Left,
    Right,
    Text,
    Title
} from "native-base";
import { COLORS } from "../constants/index";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyHeader = ()=>{
    return (
        <Header
            androidStatusBarColor={ COLORS.primary }
            style={ styles.header }
        >
            <Body>
                <Title>
                    <Text style={ styles.headerText }>
                        <AntDesign
                            name="shoppingcart"
                            style={ styles.iconStyling }
                        /> { "Street-Shopping" }
                    </Text>
                </Title>
            </Body>
            <Right>
                <TouchableOpacity>
                    <Text style={ styles.headerRightText }>
                        <AntDesign
                            name="meh"
                            style={ styles.iconStyling }
                        />
                    </Text>
                </TouchableOpacity>
                
            </Right>
                
        </Header>
    )
};

export default MyHeader;

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary
    },
    iconStyling: {
        color: "white",
        fontSize: 35,
    },
    headerText: {
        fontSize: 20,
        color: "white"
    },
    headerRightText: {
        color: "white",
        padding: 10
    },
});
