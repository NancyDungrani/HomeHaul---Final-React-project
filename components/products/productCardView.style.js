import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({

    container:{
        width:169,
        height:240,
        marginEnd:22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        justifyContent: "center"
        
    },
    imageContainers:{
        flex: 1,
        width:157,
        marginLeft:SIZES.small/2,
        marginRight:SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow:"hidden",
       
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover'
    },
    details:{
        padding: SIZES.small,
    },
    title:{
        fontFamily:"Bold",
        fontSize:SIZES.large,
        marginBottom: 2
    },
    supplier:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        color:COLORS.gray
    },
    price:{
        fontFamily:"medium",
        fontSize:SIZES.medium,
            },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right: SIZES.xSmall,
    }



})

export default styles