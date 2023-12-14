import { FlatList, Text, View , ActivityIndicator } from 'react-native'
import React , { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './productList.style'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import { ScrollView } from 'react-native'


const ProductList = () => {

    const {data , isLoading , error} = useFetch()
    const [viewWidth, setViewWidth] = useState(0);

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

 if (isLoading){
    return(
    <View style = {styles.loadingContainer}>
        <ActivityIndicator size = {SIZES.xxLarge}
         color={COLORS.primary}/>
    </View>
    );
 }
 return (
  <ScrollView overScrollMode={'auto'} style={styles.scrollView} nestedScrollEnabled={true} >
    <View onLayout={onLayout} style = {styles.container}  >
      <ScrollView horizontal={true} style={{ width: "100%" }}>
        <FlatList
            data = {data}
            numColumns={2}
            renderItem={({item}) =>(<ProductCardView item = {item}/>)}
            contentContainerStyle={styles.containerContent}
            ItemSeparatorComponent={() => <View style={styles.seperator}/>}
            
        />
    </ScrollView>
    </View>
    </ScrollView>
 )
}

export default ProductList
