import { createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import env from '../../constants/env'

export const getTaxonomys = createAsyncThunk('store/taxonomy', async () => {

    const taxonomyMenu = await AsyncStorage.getItem('taxonomyMenu');

    if (null !== taxonomyMenu) {

        return JSON.parse(taxonomyMenu);

    } else {
        return await axios.post(env.SITE_URL + "wp-json/wpr-get-taxonomy", {
            taxonomy: 'product_cat',
            hide_empty: '1',
        }).then((response) => {
            AsyncStorage.setItem('taxonomyMenu', JSON.stringify(response.data))
            return response.data
        }).catch((error) => error.json());
    }
});


export const getProduct = createAsyncThunk('store/product', async (id) => {

    return await axios.post(env.SITE_URL + "wp-json/wpr-get-product", {
        product_id: id
    }).then((response) => response.data)
        .catch((error) => error.json());

});