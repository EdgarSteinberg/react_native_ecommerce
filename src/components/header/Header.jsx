import { StyleSheet, View, Text, Pressable } from "react-native";
import { colors } from "../../global/color";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';


const Header = ({ title, subTitle }) => {
    const navigation = useNavigation();
    
    const canGoBack = navigation.canGoBack();

    return (
        <>
            <View style={styles.container}>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
                {
                    canGoBack &&
                    <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                       <Icon name='chevron-left' size={32} color={colors.white}/>
                    </Pressable>
                }
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
    },
    subTitle: {
        color: colors.white,
        fontSize: 16
    },
    goBack: {
        position: 'absolute',
        bottom: 16,
        left: 16
    }
});