import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles'
import perfil from './assets/shiny-charizard.png';
import logo from './assets/favicon.png'
import money from './assets/dollar.png'
import news from './assets/email.png'
import gift from './assets/gift.png'
import star from './assets/shield.png'
import snorlax from './assets/SnorlaxCard.png'
import pack from './assets/Pack.png'
import pikachu from './assets/ChatGPT Image 19 de jun. de 2025, 16_40_57.png'
import hourglass from './assets/hourglass.png'
function App() {
  return (
    <View style={styles.container}>
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
      <View style={styles.conteudo}>
        <LinearGradient
          colors={['#D0D0DC', '#FA3419']}
          start={{ x: 1.01, y: 0.7 }}
            end={{ x: 1, y: 0.45 }}
          style={styles.display}>
          <TouchableOpacity>
            <Image style={styles.pack} source={pack} />
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={styles.timer}>
          <LinearGradient
            colors={['#08FAC9', '#FA82E4']}
            start={{ x: 2, y: 0.42 }}
            end={{ x: -0.5, y: 0.42 }}
            style={styles.timerBar}>
          </LinearGradient>
          <Image style={styles.pikachu} source={pikachu} />
          <Text style={styles.timerText}>🕒 01 h 05 m</Text>
          <Image style={styles.hourglass} source={hourglass} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;