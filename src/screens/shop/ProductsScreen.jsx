import { StyleSheet, View, Text, FlatList, Image, Pressable } from "react-native";
/* import products from '../../data/products.json' */
import FlatCard from "../../components/flatCard/flatCard";
import { useEffect, useState } from "react";
import Search from "../../components/search/Search";

import { useSelector, useDispatch } from "react-redux";
import { setProductSelected } from "../../features/shop/shopSlice";

import { useGetProductsByCategoryQuery } from "../../services/shop/shopApi";
const ProductsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const [productsFilterd, setProductFilterd] = useState([]);
    const [keyWord, setKeyWord] = useState('')

    const products = useSelector((state) => state.shopReducer.products);
    const category = useSelector((state) => state.shopReducer.categorySelected)
    /* const { category } = route.params */

    /* const productsFilteredByCategory = useSelector((state) => state.shopReducer.productsFilteredByCategory) */
    const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category.toLowerCase());

    useEffect(() => {
       /*  const productsFilterByCategory = products.filter(producto => producto.category.toLowerCase() === category.toLowerCase()) */;

        if (keyWord) {
            const productsfilteredByKeyWord = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(keyWord.toLowerCase()))
            setProductFilterd(productsfilteredByKeyWord)
        } else {
            setProductFilterd(productsFilteredByCategory)
        }
        /*  setProductFilterd(products.filter(producto => producto.category.toLowerCase() === category.toLowerCase())) */
    }, [category, keyWord, productsFilteredByCategory])


    // Funcion de render productos 
    const renderProductsItem = ({ item }) => (
        <Pressable onPress={() => {
            dispatch(setProductSelected(item))
            navigation.navigate('Producto', { product: item })
        }}
        >
            <FlatCard styles={styles.categoryContainer}>
                <Text>{item.title}</Text>
                <Image width={80} height={40} source={{ uri: item.mainImage }} />
            </FlatCard>
        </Pressable>

    )

    return (
        <>
            <Search
                keyWord={keyWord}
                setKeyWord={setKeyWord}
            />
            <View>
                <Text style={styles.titleCategory}>ProductsScreen</Text>
                <FlatList
                    data={productsFilterd} // products json
                    renderItem={renderProductsItem} // Funcion con renderizado de la tarjeta con sus datos del producto.
                    keyExtractor={item => item.id} // key ID
                />
            </View>
        </>
    )
}

export default ProductsScreen;

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