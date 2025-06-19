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
          start={{ x: 0.5, y: 0.6 }}
          end={{ x: 0.4, y: 0.4 }}
          style={styles.display}>
          <TouchableOpacity>
            <Image style={styles.pack} source={pack} />
          </TouchableOpacity>
        </LinearGradient>

      </View>
    </View>
  )
}

export default App;