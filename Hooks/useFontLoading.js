import {useEffect, useState} from "react";
import {loadAsync} from "expo-font";
import {Ionicons} from "@expo/vector-icons";

/**
 * Function that return the status of font loading
 * @returns {[boolean]} representing the loading status
 */
export default () => {

    const [fontLoad, setFontLoad] = useState(true)

    useEffect(() => {
        const asyncFontLoad = async () => {
            await loadAsync({
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });

            setFontLoad(false)
        }

        asyncFontLoad()
    }, [])

    return [ fontLoad ];

}