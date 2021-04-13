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
    View
} from "native-base";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from "../constants/colors";

const SignUp = ()=>{
    return (
        <>
            <StatusBar backgroundColor={ COLORS.primary } />
            <Container style={ styles.container }>
                <Content padder>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={ styles.imageContainer }>
                            {/* TODO chooseImage */}
                            <TouchableOpacity 
                            // onPress={}
                            >
                                <Thumbnail large source={{}} />
                            </TouchableOpacity>
                        </View>
                        {/* TODO -for progress bar while uploading images... */}
                        <Form>
                            {/* FirstName... */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="First-name..."
                                    value="Your first name"
                                    style={{ color: COLORS.primary }}
                                    placeholderTextColor="#02B290"
                                    selectionColor="#242B2E"
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* LastName... */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="Last-name..."
                                    value="Your Last name"
                                    style={{ color: COLORS.primary }}
                                    placeholderTextColor="#02B290"
                                    selectionColor="#242B2E"
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* COntact-No */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="Contact-No..."
                                    value="9876543210"
                                    keyboardType="numeric"
                                    style={{ color: COLORS.primary }}
                                    placeholderTextColor="#02B290"
                                    selectionColor="#242B2E"
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
        width: "90%",
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 5
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
    }
});
