import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginHorizontal: 12
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    hearderTitle:{
        fontFamily:"semi-bold",
        fontSize: SIZES.large -2,
    }
    
})
export default styles