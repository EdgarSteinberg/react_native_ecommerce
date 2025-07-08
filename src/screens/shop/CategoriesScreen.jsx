import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
/* import categories from '../../data/categories.json'; */
import FlatCard from '../../components/flatCard/flatCard';
import TextPoppinsRegular from '../../components/textPoppinsRegular/TextPoppinsRegular';

import { useSelector, useDispatch } from 'react-redux'; 
import { setCategorySelected,filterProducts} from '../../features/shop/shopSlice';

const CategoriesScreen = ({ navigation }) => { 
    
    const categories = useSelector((state) => state.shopReducer.categories);
    
    const dispatch = useDispatch();

    const renderCategoryItem = ({ item }) => (
        
        <Pressable onPress={  
            () =>{ 
                dispatch(setCategorySelected(item.title))
                dispatch(filterProducts())
                navigation.navigate('Productos', {category:item.title})
            }}>

            <FlatCard>

                <View style={styles.categoryContainer}>
                    <TextPoppinsRegular>{item.title}</TextPoppinsRegular>
                    <Image width={80} height={40} source={{ uri: item.image }} />
                </View>
            
            </FlatCard>

        </Pressable>

    )

    return (
        <>
            <View>
                <Text style={styles.titleCategory}>CategoriesScreen</Text>
                <FlatList
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}


export default CategoriesScreen;

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8
    },
    titleCategory: {
        textAlign: 'center'
    }
});