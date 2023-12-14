import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS, SIZES } from "../../constants"


const Carousel = () => {
    const slides = [ 
        "https://www.purbafurniture.ca/wp-content/uploads/2022/05/Luxury-bedroom.png",
        "https://www.purbafurniture.ca/wp-content/uploads/2022/08/bluebedroomset.jpg",
        "https://www.purbafurniture.ca/wp-content/uploads/2022/07/b21431364657off549692.jpg"
    ]
  return (
    <View style = {styles.carouselContainer}>
        <SliderBox images={slides}
        dotColor = {COLORS.primary}
        inactiveDotColor = {COLORS.secondary}
        ImageComponentStyle= {{borderRadius: 15, width:"93%", marginTop:15 }}
        autoplay
        circleLoop>
        </SliderBox>
      
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex: 1,
        alignItems:"center"
    }
})