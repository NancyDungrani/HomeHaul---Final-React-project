import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    welcomeText: (color,top) => ({
        fontFamily:"Bold",
        fontSize:SIZES.xLarge,
        marginTop:top/2,
        color:color,
        marginHorizontal:SIZES.small
    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginHorizontal:SIZES.small,
        height:50,
        marginTop: SIZES.xSmall,
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small
    },
    searchWrapper:{
        flex: 1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:50,
        height:"100%",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.medium,
        justifyContent:'center',
        alignItems:"center"
    }

})
export default styles