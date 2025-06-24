import { View, Text, StyleSheet } from 'react-native';
import { Image, Card } from 'react-native-paper';


export function RestaurantsInfo({ restaurant = {} }) {
    const { 
        name = "Restaurant Name", 
        icon, 
        photos = ['https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqCdOqUcDNepWSL996WpgzVMeCmcEKjL8Zt72XnOKPk57LU5DIk18eM9oFJM_GfiLh0tdLobMtc_dXul0ryJE7nWHH-fWAJR1Xhs8q_2bqFTugTaKgQulqDN_Aty8wmLiKwkFBV=s1360-w1360-h1020-rw'], 
        address = "123 Main St",
        openInHours = "10:00 AM - 10:00 PM",
        rating = 4.5,
        isClosedTemporarily = false,
        isOpenNow = true,
    } = restaurant;    

    return (
        <View>  
            <Card style={styles.cardContainer}>
                <Card.Cover key={name} style={styles.coverContainer} source={{ uri: photos[0] }} />
                <Card.Title title={name} subtitle={address} />
                <Card.Content>
                    <Text>{openInHours}</Text>
                    <Text>{rating}</Text>
                    <Text>{isOpenNow ? "Open Now" : "Closed Temporarily"}</Text>
                </Card.Content>
            </Card>            
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        
    },
    coverContainer: {        
        backgroundColor: "white",
    },
});