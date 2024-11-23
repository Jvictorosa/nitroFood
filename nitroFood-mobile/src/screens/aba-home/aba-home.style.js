import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12
    },
    headerBar: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        marginLeft:10,
        width: 85,
        height: 60,
    },
    cart: {
        width: 30,
        height: 30
    },
    busca: {
        marginBottom: 10,
        padding:20
    }
}