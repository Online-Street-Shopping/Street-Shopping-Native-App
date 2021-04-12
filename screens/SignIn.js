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

const SignIn = ()=>{
    return (
        <>
            <StatusBar backgroundColor="" />
            <Container style={ styles.container }>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <H3 style={ styles.heading }>
                        Welcome to Street-Shopping....
                    </H3>

                    <Image
                        // source={}
                        style={{ width: null, height: 150, marginTop: 30 }}
                        resizeMode="contain"
                    />

                    <Form>
                        {/* EmailId */}
                        <Item regular style={ styles.formItem }>
                            <Input
                                placeholder="Email..."
                                value=""
                                style={{ color: "#eee" }}
                                // ToDO - for change text...
                            />
                        </Item>
                        {/* Password */}
                        <Item regular style={ styles.formItem }>
                            <Input
                                placeholder="Password..."
                                value=""
                                secureTextEntry={ true }
                                style={{ color: "#eee" }}
                                // ToDO - for change text...
                            />
                        </Item>
                        {/* SignIp-Button */}
                        <Button regular block 
                        // onPress={}
                        >
                            <Text>Sign-in</Text>
                        </Button>
                        <TouchableOpacity
                            // onPress={} //navigate to signup screen
                            style={{ marginTop: 10 }}
                        >
                            <Text
                                style={{ color: "#fff", textAlign: "center" }}
                            >
                                Do not have an account ?! Sign-up here...
                            </Text>
                        </TouchableOpacity>
                    </Form>
                </ScrollView>
            </Container>
        </>
    )
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b262c",
        flex: 1,
        justifyContent: "flex-start"
    },
    heading: {
        textAlign: "center",
        color: "#fdcb9e",
        marginHorizontal: 5,
        marginTop: 30
    },
    formItem: {
        marginBottom: 20,
    }
});
