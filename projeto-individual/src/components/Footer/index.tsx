import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'

import home from '../../../assets/home.png'
import cards from '../../../assets/cards.png'
import friends from '../../../assets/friends.png'
import vs from '../../../assets/vs.png'
import menu from '../../../assets/menu.png'

export function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image style={styles.botoesFooter} source={home} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.botoesFooter} source={cards} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.botoesFooter} source={friends} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.botoesFooter} source={vs} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.botoesFooter} source={menu} />
            </TouchableOpacity>
        </View>
    )
}