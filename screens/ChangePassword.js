import React from 'react'
import {
    Button,
    Container, 
    Content,
    Form,
    H3,
    Input,
    Item,
    Text,
    Thumbnail,
    View
} from "native-base";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images, COLORS } from "../constants";

const SignIn = ()=>{
    return (
        <>
            <Container style={ styles.container }>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <H3 style={ styles.heading }>
                        Welcome to Street-Shopping....
                    </H3>

                    <Image
                        source={ images.changePasswordImage }
                        // style={{ width: null, height: 150, marginTop: 30 }}
                        style={ styles.imageContainer }
                        resizeMode="contain"
                    />

                    <Form>
                        {/* Password */}
                        <Item regular style={ styles.formItem }>
                            <Input
                                placeholder="Password..."
                                // value=""
                                secureTextEntry={ true }
                                style={{ color: COLORS.primary }}
                                placeholderTextColor="#02B290"
                                selectionColor="#242B2E"
                                // ToDO - for change text...
                            />
                        </Item>
                        {/* Confirm-Password */}
                        <Item regular style={ styles.formItem }>
                            <Input
                                placeholder="Confirm Password..."
                                // value=""
                                secureTextEntry={ true }
                                style={{ color: COLORS.primary }}
                                placeholderTextColor="#02B290"
                                selectionColor="#242B2E"
                                // ToDO - for change text...
                            />
                        </Item>
                        {/* SignIp-Button */}
                        <Button regular block 
                        // onPress={}
                        style={ styles.buttonColor }
                        >
                            <Text style={ styles.buttonText }>Change password</Text>
                        </Button>
                    </Form>
                </ScrollView>
            </Container>
        </>
    )
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    imageContainer: {
        // alignItems: "center",
        // marginVertical: 5,
        // padding: 5
        width: null,
        height: 150,
        marginTop: 30,
        marginBottom: 30
    },
    progress: {
        width: null,
        marginBottom: 20
    },
    formItem: {
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
    },
    buttonColor: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20
    },
    heading: {
        color: "#00D84A",
        textAlign: "center",
        marginHorizontal: 5,
        marginTop: 50
    }
});
