import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

import perfil from '../../../assets/shiny-charizard.png';
import money from '../../../assets/dollar.png'
import news from '../../../assets/email.png'
import gift from '../../../assets/gift.png'
import star from '../../../assets/shield.png'
import snorlax from '../../../assets/SnorlaxCard.png'

export function Header()  {
    return (

      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoDir}>
          <Image style={styles.botaoDImg} source={star} />
          <Image style={styles.snorlax} source={snorlax} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.perfil} source={perfil} />
          <Text style={styles.nivel}>Nv. 42</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.botoes}>
            <TouchableOpacity>
              <Image style={styles.botoesEsq} source={money} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.botoesEsq} source={news} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.botoesEsq} source={gift} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
}