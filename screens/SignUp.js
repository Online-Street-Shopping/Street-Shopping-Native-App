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

const SignUp = ()=>{
    return (
        <>
            <StatusBar backgroundColor="" />
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
                                    value=""
                                    style={{ color: "#eee" }}
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* LastName... */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="Last-name..."
                                    value=""
                                    style={{ color: "#eee" }}
                                    // ToDO - for change text...
                                />
                            </Item>
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
                            {/* COntact-No */}
                            <Item regular style={ styles.formItem }>
                                <Input
                                    placeholder="Contact-No..."
                                    value=""
                                    keyboardType="numeric"
                                    style={{ color: "#eee" }}
                                    // ToDO - for change text...
                                />
                            </Item>
                            {/* SignUp-Button */}
                            <Button regular block 
                            // onPress={}
                            >
                                <Text>Sign-up</Text>
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
        backgroundColor: "#1b262c",
        flex: 1,
        justifyContent: "flex-start"
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
    }
});
