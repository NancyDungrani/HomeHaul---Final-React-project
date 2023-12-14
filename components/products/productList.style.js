import { StyleSheet } from "react-native"
import { COLORS,SIZES } from "../../constants/index"

const styles = StyleSheet.create({
    loadingContainer : {
        flex : 1 ,
        alignContent : "center",
        justifyContent : "center",
        alignItems : "center",
    },
    container:{
        alignItems:"center",
        left : 10,
        right : 10,
          //marginRight : SIZES.xxLarge
    

    },
    seperator:{
        height: 16
    },
    containerContent : {
        marginTop: SIZES.xLarge/2,
       // paddingEnd : SIZES.xxLarge*2,
       // marginRight:12,
        justifyContent : "center",
    },
    scrollView :{
       marginTop: 60,
       width: "100%"
    }
})
export default styles