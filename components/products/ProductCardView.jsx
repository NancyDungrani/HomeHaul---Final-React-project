import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import styles from './productCardView.style';
import { Ionicons,Fontisto} from "@expo/vector-icons"
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails" , {item})}>
        <View style={styles.container}>
            <View style={styles.imageContainers}>
                <Image
                source={{uri : "https://www.purbafurniture.ca/wp-content/uploads/2022/05/Luxury-bedroom.png"}}
                style = {styles.image}
                />

            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product Title</Text>
                <Text style={styles.supplier} numberOfLines={1}>Supplier</Text>
                <Text style={styles.price}>250$</Text>

            </View>

            <TouchableOpacity style = {styles.addBtn}>
              <Ionicons name="add-circle" size={30} color={COLORS.primary}/>


            </TouchableOpacity>
        </View>

    </TouchableOpacity>
  
  )
}

export default ProductCardView
