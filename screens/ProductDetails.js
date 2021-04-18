import { 
    Container, 
    Content,
    H1,
    Text,
    View, 
 } from 'native-base';
 import {
     ScrollView,
     StyleSheet,
     Image,
 } from "react-native";
 import { Card } from "react-native-elements";
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { images, COLORS } from "../constants/";
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductDetails = ()=>{
    return (
        <>
            <ScrollView>
                <Container style={ styles.mainContainer }>
                    {/* Product Image */}
                    <Container style={ styles.imageContainer }>
                        <SliderBox
                            autoplay={ true } 
                            circleLoop={ true }  
                            images={[
                                images.staticProduct1,
                                images.changePasswordImage,
                                images.signInScreenWelcomeImg
                            ]}
                            style={ styles.imageShow }
                        />
                    </Container>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-name */}
                        <View style={ styles.productName }>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: "bold",
                                margin: 10
                            }}>Product-Name</Text>
                        </View>
                        {/* Product-rating */}
                        <View  style={ styles.productRating }>
                            <Text style={ styles.textStyleTitle }>
                                4.5 <AntDesign name="star" style={ styles.textStyleTitle } />
                            </Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    {/* Product-description */}
                    <View style={ styles.productDescription }>
                        <Text style={ styles.textStyleBody }>
                        THis is description about product.THis is description about product.
                        THis is description about product.THis is description about product.
                        THis is description about product.THis is description about product.
                        THis is description about product.THis is description about product.
                        </Text>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    {/* Product-reviews */}
                    <View style={ styles.reviewStyling }>
                        <Card>
                            <View style={{
                                backgroundColor: "red",
                                flexDirection: "column"
                            }}>
                                <Card.Image
                                    source={ images.staticProduct1 }
                                    borderRadius={120}
                                    style={{
                                        width: "45%",
                                    }}
                                />
                                <Card.Title>
                                    <H1>UserName</H1>
                                </Card.Title>
                            </View>
                        </Card>
                    </View>
                </Container>
            </ScrollView>
            {/* Product-price */}
            {/* Product-stock */}
            {/* Product-category/sub-category */}
            {/* Product-shop */}
        </>
    )
};

export default ProductDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageShow: {
        height: "100%",
        width: "100%",
        display: "flex",
    },
    productDetailsContainer: {
        flex: 0.12,
        flexDirection: "row",
        width: "100%",
        // backgroundColor: "red",
    },
    imageContainer: {
        flex: 0.4,
        width: "100%",
        alignItems: "center",
    },
    productHeader: {
        width: "100%",
    },
    productName: {
        width: "75%",
        // backgroundColor: "blue",
        alignSelf: "center"
    },
    productRating: {
        width: "25%",
        // backgroundColor: "green",
        alignSelf: "center",
        fontSize: 35
    },
    textStyleTitle: {
        // textAlign: "center",
        padding: 7,
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.primary
    },
    textStyleBody: {
        padding: 12
    },
    productDescription: {
        flex: 0.25,
        // backgroundColor: "black",
        // margin: 5,
        // padding: 10,
    },
    reviewStyling: {

    },
});


