import React, { Component } from 'react'
import { Image } from 'react-native'
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { COLORS, styles, assets } from '../constants/style'

export class Header extends Component {
    render() {

        const { navigation } = this.props;

        return (
            <AppBar
                title={
                    <Image
                        style={[styles.mt_3, { width: 130 }]}
                        source={assets.logo}
                        resizeMode='contain'
                    />
                }
                style={[styles.pb_1, { height: 100, justifyContent: 'flex-end' }]}
                color={COLORS.primary}
                leading={props => (
                    <IconButton
                        icon={props => <Icon name="menu" {...props} />}
                        onPress={() => navigation.openDrawer()}
                        {...props}
                    />
                )}
                trailing={props => (
                    <HStack style={[styles.container]}>
                        <IconButton
                            icon={props => <Icon name="magnify" {...props} />}
                            {...props}
                        />
                        <IconButton
                            icon={props => <Icon name="dots-vertical" {...props} />}
                            {...props}
                        />
                    </HStack>
                )}
            />
        )
    }
}

export default Header