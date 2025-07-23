import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigator";
import { useGetProfilePictureQuery } from "../services/user/userApi";
import { setProfilePicture } from "../features/user/userSlice";

const MainNavigator = () => {
    const userEmail = useSelector((state) => state.userReducer.userEmail);
    const localId = useSelector((state) => state.userReducer.localId);

 /*    console.log('Email:', userEmail);
    console.log('Local ID:', localId); */
    const dispach = useDispatch();
    const {data:profilePicture,isLoading,error} = useGetProfilePictureQuery(localId);

    console.log(`ProfilePicture desde MainNavigator`, profilePicture)
    useEffect(() => {
        if(profilePicture){
            dispach(setProfilePicture(profilePicture.image));
        }
    },[profilePicture])

    return (
        <NavigationContainer>
            {
                userEmail ? <TabNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator;