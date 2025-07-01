import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../global/color";

const Header = ({ title }) => {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grisOcuro
    },
    title: {
        fontSize: 24,
        color: colors.white,
        fontFamily: 'Poppins-Bold'
    }
});