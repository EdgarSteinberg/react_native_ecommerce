import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../global/color";

const Search = ({ keyWord, setKeyWord }) => {
    
    return (
        <View style={styles.searchContainer}>
            <TextInput
                onChangeText={(text) => setKeyWord(text)}
                style={styles.searchInput}
                placeholder="Buscar..."
                value={keyWord}
            />
            <Ionicons name="search" size={32} color={colors.grisOcuro} />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 8
    },
    searchInput: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 16,
        padding: 8,
        paddingHorizontal: 16,
        width: "90%",
        marginRight: 8, // en vez de gap
    },
});
