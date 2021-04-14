import React from 'react'
import {
    Button,
    Container, 
    Content,
    Form,
    Input,
    Item,
    Text,
    Thumbnail,
    View,
} from "native-base";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images, COLORS } from "../constants/index";

const SignUp = ()=>{
    return (
        <>
            <StatusBar backgroundColor={ COLORS.primary } />
            <Container style={ styles.container }>
                <Content padder>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {/* <View style={ styles.imageContainer }>
                            // TODO chooseImage 
                            <TouchableOpacity 
                            onPress={}
                            >
                                <Thumbnail large source={{ }} />
                            </TouchableOpacity>
                        </View> */}
                        {/* TODO -for progress bar while uploading images... */}
                        <Image
                            source={ images.changePasswordImage }
                            // style={{ width: null, height: 150, marginTop: 30 }}
                            style={ styles.imageContainer }
                            resizeMode="contain"
                        />
                        <Form style={ styles.form }>
                            {/* FirstName... */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="First-name..."
                                    value="Your first name"
                                    style={ styles.inputText }
                                    placeholderTextColor={ COLORS.placeHolderColor }
                                    selectionColor={ COLORS.selectionColor }
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* LastName... */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="Last-name..."
                                    value="Your Last name"
                                    style={ styles.inputText }
                                    placeholderTextColor={ COLORS.placeHolderColor }
                                    selectionColor={ COLORS.selectionColor }
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* COntact-No */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="Contact-No..."
                                    value="9876543210"
                                    keyboardType="numeric"
                                    style={ styles.inputText }
                                    placeholderTextColor={ COLORS.placeHolderColor }
                                    selectionColor={ COLORS.selectionColor }
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* SignUp-Button */}
                            <Button regular block 
                                style={ styles.buttonColor }
                            // onPress={}
                            >
                                <Text style={ styles.buttonText }>Edit profile</Text>
                            </Button>
                        </Form>
                    </ScrollView>
                </Content>
            </Container>
        </>
    )
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 5,
        width: null,
        height: 150,
        marginTop: 30,
        marginBottom: 20
    },
    progress: {
        width: null,
        marginBottom: 20
    },
    formItem: {
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
        borderColor: COLORS.primary,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        // borderTopWidth: 5,
        // borderBottomWidth: 5
    },
    form: {
        padding: 10,
        margin: 10
    },
    buttonColor: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20
    },
    inputText: {
        color: COLORS.primary
    }
});
