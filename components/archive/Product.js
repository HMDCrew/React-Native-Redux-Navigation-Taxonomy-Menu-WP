import { TouchableOpacity, Image, Text, View } from 'react-native'
import React, { Component } from 'react'

import { styles } from '../../constants/style';

export class ProductArchive extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { navigation, item } = this.props;
        const { price, symbol, name, image_uri } = item;

        return (
            <TouchableOpacity onPress={() => navigation.navigate('Product', { item })} >
                <View>
                    <Image source={{ uri: image_uri }} style={[styles.w_100, { height: 250 }]} resizeMode='contain' />
                    <Text>{name}</Text>
                    {
                        '' !== price ?
                            <Text>{price}{symbol}</Text>
                            : null
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProductArchive