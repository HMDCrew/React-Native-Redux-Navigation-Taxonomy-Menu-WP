import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { styles } from '../constants/style'
import Header from '../components/Header';

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.d_flex}>
                <Header {...this.props} />
                <Text style={[styles.my_5, { textAlign: 'center' }]}>Try category in left menu</Text>
            </View>
        )
    }
}

export default Home
