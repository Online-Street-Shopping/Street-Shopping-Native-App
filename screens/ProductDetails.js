import { 
    Container, 
    Content,
    H1,
    H2,
    H3,
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
                            {/* <Text style={{
                                fontSize: 30,
                                fontWeight: "bold",
                                margin: 10
                            }}>Product-Name</Text> */}
                            <Text style={ styles.textStyleTitle }>Product-Name</Text>
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
                        <View style={ styles.reviewMainContainer }>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    // backgroundColor: "yellow",
                                    width: "29%",
                                }}>
                                    <Image
                                        source={ images.staticProduct1 }
                                        borderRadius={120}
                                        style={{
                                            width: "100%",
                                            height: 100,
                                            marginTop: 10
                                        }}
                                    />
                                </View>
                                <View style={{
                                    width: "71%",
                                    margin: 5
                                }}>
                                    <H1 style={{
                                        color: COLORS.primary,
                                        marginLeft: 10,
                                        fontWeight: "bold"
                                    }}>@Username</H1>
                                    
                                    <H3 style={{
                                        textAlign: "left",
                                        margin: 10,
                                    }}>This is my review about this product.This is my review about this product.This is my review about this product.
                                    </H3>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginLeft: "5%"
                                }}>
                                <AntDesign
                                    name="like2"
                                    style={ styles.reviewSecondaryText }
                                />
                                <Text style={ styles.reviewSecondaryText }>
                                    15</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <AntDesign
                                        name="dislike2"
                                        style={ styles.reviewSecondaryText }
                                    />
                                    <Text style={ styles.reviewSecondaryText }>5</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Text style={ styles.reviewSecondaryText }>4.1</Text>
                                    <AntDesign
                                        name="star"
                                        style={ styles.reviewSecondaryText }
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={ styles.reviewMainContainer }>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    // backgroundColor: "yellow",
                                    width: "29%",
                                }}>
                                    <Image
                                        source={ images.staticProduct1 }
                                        borderRadius={120}
                                        style={{
                                            width: "100%",
                                            height: 100,
                                            marginTop: 10
                                        }}
                                    />
                                </View>
                                <View style={{
                                    width: "71%",
                                    margin: 5
                                }}>
                                    <H1 style={{
                                        color: COLORS.primary,
                                        marginLeft: 10,
                                        fontWeight: "bold"
                                    }}>@Username</H1>
                                    
                                    <H3 style={{
                                        textAlign: "left",
                                        margin: 10,
                                    }}>This is my review about this product.This is my review about this product.This is my review about this product.
                                    </H3>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginLeft: "5%"
                                }}>
                                <AntDesign
                                    name="like2"
                                    style={ styles.reviewSecondaryText }
                                />
                                <Text style={ styles.reviewSecondaryText }>
                                    15</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <AntDesign
                                        name="dislike2"
                                        style={ styles.reviewSecondaryText }
                                    />
                                    <Text style={ styles.reviewSecondaryText }>5</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Text style={ styles.reviewSecondaryText }>4.1</Text>
                                    <AntDesign
                                        name="star"
                                        style={ styles.reviewSecondaryText }
                                    />
                                </View>
                            </View>
                        </View>
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
        width: "100%",
        height: "auto",
        flexWrap: "wrap"
    },
    imageShow: {
        height: 180,
        width: "100%",
    },
    productDetailsContainer: {
        flex: 0.12,
        flexDirection: "row",
        width: "100%",
        height: "100%"
        // backgroundColor: "red",
    },
    imageContainer: {
        flex: 0.4,
        height: "100%",
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
        padding: 10,
        height: "100%"
    },
    productDescription: {
        flex: 0.3,
        height: "50%"
        // backgroundColor: "black",
        // margin: 5,
        // padding: 10,
    },
    reviewStyling: {
        flex: 0.7,
        height: "auto",
        flexWrap: "nowrap"
    },
    reviewMainContainer: {
        // backgroundColor: COLORS.tabSelectionColor,
        margin: 10,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        borderColor: COLORS.tabSelectionColor,
        borderWidth: 2.5,
        borderRadius: 10
    },
    reviewSecondaryText:{
        color: COLORS.primary,
        textAlign: "center",
        fontSize: 25,
        // margin: 2,
        padding: 2
    }
});

{/* <Card>
                            <View style={{
                                backgroundColor: "red",
                                flexDirection: "column",
                                display: 'flex'
                            }}>
                                <Card.Image
                                    source={ images.staticProduct1 }
                                    borderRadius={120}
                                    style={{
                                        width: "30%",
                                        height: 100,

                                    }}
                                />
                                <Card.FeaturedTitle style={ styles.cardUserName }>
                                    Username
                                </Card.FeaturedTitle>
                            </View>
                        </Card> */}


