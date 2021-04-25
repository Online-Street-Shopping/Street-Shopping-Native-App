import { Button, Container, Form, H1, Input, Item, Text, View } from 'native-base';
import {
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { COLORS, images } from '../constants';
import { Card } from "react-native-elements";
import { TouchableOpacity } from 'react-native';

const Products = ({ navigation })=>{
    return (
        <>
            <ScrollView>
                <Container style={ styles.mainContainer }>
                    <Container style={ styles.searchBarContainer }>
                        <View style={{
                            width: "15%",
                            // backgroundColor: "red"
                        }}>
                            <FontAwesome
                                name="search"
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 28,
                                    marginLeft: 10,
                                    marginTop: 20,
                                }}
                            />
                        </View>
                        <View style={{

                            width: "70%"
                        }}>
                            <Form>
                                <Item>
                                    <Input
                                        placeholder="Seach here...."
                                        placeholderTextColor="white"
                                        style={{
                                            fontSize: 25,
                                            marginTop: 10
                                        }}
                                        clearTextOnFocus
                                        selectionColor={ COLORS.lightTheme }
                                    />
                                </Item>
                            </Form>
                        </View>
                        <View style={{
                            width: "15%"
                        }}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name="filter-menu"
                                    style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 30,
                                        marginTop: 20,
                                        marginRight: 10
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Container>
                    <Container>
                        <TouchableOpacity
                            onPress={(()=> navigation.navigate("ProductDetails") )}
                        >
                            <Card>
                                <Card.Image
                                    source={ images.staticProduct1 }
                                />
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "75%" }}>
                                        <H1 style={{
                                            // color: COLORS.primary,
                                            fontWeight: "bold"
                                        }}>
                                            Product-Name 
                                        </H1>
                                    </View>
                                    <View style={{ width: "25%" }}>
                                        <H1 style={{
                                            color: COLORS.primary,
                                            fontWeight: "bold"
                                        }}>
                                            4.5 <AntDesign
                                                name="star"
                                                style={{
                                                    fontSize: 25
                                                }}
                                            />
                                        </H1>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "40%" }}>
                                        <Text style={{
                                            // color: COLORS.primary,
                                            fontWeight: "bold",
                                            fontSize: 25
                                        }}>
                                            Rs. 999/- 
                                        </Text>
                                    </View>
                                    <View style={{ width: "60%" }}>
                                        <TouchableOpacity>
                                            <Text style={{
                                                color: "white",
                                                fontWeight: "bold",
                                                backgroundColor: COLORS.placeHolderColor,
                                                margin: 5,
                                                padding: 5,
                                                borderRadius: 5
                                            }}>RSVP Brothers And Co.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "50%" }}>
                                        <TouchableOpacity>
                                            <Text style={{
                                                textAlign: "center",
                                                color: "white",
                                                fontWeight: "bold",
                                                backgroundColor: COLORS.primary,
                                                margin: 10,
                                                padding: 5,
                                                marginHorizontal: 5,
                                                height: 50,
                                                borderRadius: 5,
                                                fontSize: 25
                                            }}>Add to Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "50%" }}>
                                        <TouchableOpacity>
                                            <Text style={{
                                                textAlign: "center",
                                                color: "white",
                                                fontWeight: "bold",
                                                backgroundColor: COLORS.primary,
                                                margin: 10,
                                                padding: 5,
                                                marginHorizontal: 5,
                                                height: 50,
                                                borderRadius: 5,
                                                fontSize: 25
                                            }}>Buy now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card>
                                <Card.Image
                                    source={ images.staticProduct1 }
                                />
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "75%" }}>
                                        <H1 style={{
                                            // color: COLORS.primary,
                                            fontWeight: "bold"
                                        }}>
                                            Product-Name 
                                        </H1>
                                    </View>
                                    <View style={{ width: "25%" }}>
                                        <H1 style={{
                                            color: COLORS.primary,
                                            fontWeight: "bold"
                                        }}>
                                            4.5 <AntDesign
                                                name="star"
                                                style={{
                                                    fontSize: 25
                                                }}
                                            />
                                        </H1>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "40%" }}>
                                        <Text style={{
                                            // color: COLORS.primary,
                                            fontWeight: "bold",
                                            fontSize: 25
                                        }}>
                                            Rs. 999/- 
                                        </Text>
                                    </View>
                                    <View style={{ width: "60%" }}>
                                        <TouchableOpacity>
                                            <Text style={{
                                                color: "white",
                                                fontWeight: "bold",
                                                backgroundColor: COLORS.placeHolderColor,
                                                margin: 5,
                                                padding: 5,
                                                borderRadius: 5
                                            }}>RSVP Brothers And Co.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "50%" }}>
                                        <TouchableOpacity>
                                            <Text style={{
                                                textAlign: "center",
                                                color: "white",
                                                fontWeight: "bold",
                                                backgroundColor: COLORS.primary,
                                                margin: 10,
                                                padding: 5,
                                                marginHorizontal: 5,
                                                height: 50,
                                                borderRadius: 5,
                                                fontSize: 25
                                            }}>Add to Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "50%" }}>
                                        <TouchableOpacity>
                                            <Text style={{
                                                textAlign: "center",
                                                color: "white",
                                                fontWeight: "bold",
                                                backgroundColor: COLORS.primary,
                                                margin: 10,
                                                padding: 5,
                                                marginHorizontal: 5,
                                                height: 50,
                                                borderRadius: 5,
                                                fontSize: 25
                                            }}>Buy now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </Container>
                    
                    {/* <Container style={ styles.mainContentContainer }>
                        <View style={ styles.cardContainer }>
                            <View style={{
                                backgroundColor: "red",
                                flexDirection: "column",
                                width: "30%"
                            }}>
                                <Image
                                    source={ images.staticProduct1 }
                                    style={{
                                        width: "100%",
                                        height: 100
                                    }}
                                />
                            </View>
                            <View style={{
                                // backgroundColor: "green",
                                width: "70%",
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    // backgroundColor: "blue",
                                    width: "73%"
                                }}>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 25,
                                        color: COLORS.primary,
                                        fontWeight: "bold"
                                    }}>Product-Name</Text>
                                </View>
                                <View style={{
                                    // backgroundColor: "orange",
                                    flexDirection: "row"
                                }}>
                                    <Text style={{
                                        fontSize: 23,
                                        color: COLORS.primary,
                                        fontWeight: "bold"
                                    }}>4.5
                                    <AntDesign
                                        name="star"
                                        style={{
                                            fontSize: 29
                                        }}
                                    />
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Container> */}
                </Container>
            </ScrollView>
        </>
    )
};

export default Products;

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: "red",
        flex: 1,
        // flexDirection: "column",
        width: "100%",
        height: "auto",
        flexWrap: "wrap"
    },
    searchBarContainer: {
        flex: 0.1,
        flexDirection: "row",
        width: "100%",
        height: 60,
        backgroundColor: COLORS.primaryShade
    },
    mainContentContainer: {
        // backgroundColor: "red",
        flex: 0.9,
        height: "auto",
        width: "95%",
        padding: 5,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    cardContainer: {
        flexDirection: "row",
        width: "100%",
    }
});