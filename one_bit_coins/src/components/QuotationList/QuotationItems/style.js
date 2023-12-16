import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    principal: {
        width: "95%",
        height: "auto",
        backgroundColor: "#051010",
        marginLeft: "10%",
        marginRight: 25,
        marginBottom: 120,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    viewLeft: {
        width: "60%",
        alignItems: "flex-start",
    },
    viewRight: {
        width: "35%",
        height: "100%",
        alignItems: "flex-end",
    },
    logo: {
        width: 40,
        height: 40,
        marginLeft: 5,

    },
    viewLogo: {
        flexDirection: "row",
        alignItems: "center",
    },
    dataCotacao: {
        fontSize: 16,
        paddingLeft: 3,
        color: "green",
        fontWeight: "bold",
    },
    price: {
        paddingTop: 5,
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
    },
});

export default styles;