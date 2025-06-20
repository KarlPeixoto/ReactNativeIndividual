import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles'
import perfil from './assets/shiny-charizard.png';
import money from './assets/dollar.png'
import news from './assets/email.png'
import gift from './assets/gift.png'
import star from './assets/shield.png'
import snorlax from './assets/SnorlaxCard.png'
import pack from './assets/Pack.png'
import pikachu from './assets/ChatGPT Image 19 de jun. de 2025, 16_40_57.png'
import hourglass from './assets/hourglass.png'
import loja from './assets/shopping-bag.png'
import exclamacao from './assets/mark.png'
import card from './assets/trading.png'
import chansey from './assets/chansey.png'
import hearts from './assets/health-bar.png'
import home from './assets/home.png'
import cards from './assets/cards.png'
import friends from './assets/friends.png'
import vs from './assets/vs.png'
import menu from './assets/menu.png'
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
          start={{ x: 1., y: 0.6 }}
          end={{ x: 0.8, y: 0 }}
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
        <TouchableOpacity>
          <LinearGradient
            colors={['#D0D0DC', '#BFBFBF']}
            start={{ x: 1., y: 0.6 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.buttonLoja}>
            <Text style={styles.lojaText1}>Presentes diários disponíveis</Text>
            <Image style={styles.exclamacao} source={exclamacao} />
            <Image style={styles.lojaImg} source={loja} />
            <Text style={styles.lojaText2}>Loja</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={['#D0D0DC', '#F2B3CA']}
            start={{ x: 1, y: 0.6 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.buttonEscolha}>
            <LinearGradient
              colors={['#E84C78', '#fff']}
              start={{ x: 2, y: 0.42 }}
              end={{ x: -0.5, y: 0.42 }}
              style={styles.chanseyBox}>
              <Image style={styles.chansey} source={chansey} />
              <Text style={styles.escolhaText1}>Escolha Chansey disponível</Text>
              <Image style={styles.hearts} source={hearts} />
            </LinearGradient>
            <Image style={styles.escolhaImg} source={card} />
            <Text style={styles.escolhaText2}>Escolha Misteriosa</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
      </View>
  )
}

export default App;