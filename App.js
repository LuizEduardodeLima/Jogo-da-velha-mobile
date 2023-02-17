import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const estados = [
    {id:0, ativo:false, show:false},
    {id:1, ativo:false, show:false},
    {id:2, ativo:false, show:false},
    {id:3, ativo:false, show:false},
    {id:4, ativo:false, show:false},
    {id:5, ativo:false, show:false},
    {id:6, ativo:false, show:false},
    {id:7, ativo:false, show:false},
    {id:8, ativo:false, show:false},
  ]

  const controle = []

  //Efeito que irá definir a vez do jogador:
  const [vez, setVez] = useState(0)

  //Controle de click dos botões:
  const [states, setStates] = useState([...estados])

  //Controlar vez do jogo:
  const [control, setControl] = useState(0)

  //Verificar qual peça foi escolhida em seu respectivo card:
  const [peca, setpecas] = useState([...controle])
  
  //Ativar cards que marcaram ponto:
  const [ganhou, setGanhou] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0
    ])
  //Controlar placar e numero da partida:
  const [placar, setPlacar] = useState([0, 0, 0]) 

  const handlePress = (params)=>{
    const mudarEstado = [...states]
    mudarEstado[params].ativo = true
    setStates(mudarEstado)
    if(control === 0){
      setVez(0)
      setControl(1)
      const mudar = [...peca]
      mudar[params] = "X"
      setpecas(mudar)
      //Verificação vertical:
      if(mudar[0] === mudar[1] && mudar[0]  === mudar[2] && mudar[0] != null && mudar[1] != null && mudar[2] != null){
        const vitoria = [...ganhou]
        vitoria[0] = true
        vitoria[1] = true
        vitoria[2] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
        //Desativando o click dos outros botões:
        states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[3] === mudar[4] && mudar[3]  === mudar[5] && mudar[3] != null && mudar[4] != null && mudar[5] != null){
        const vitoria = [...ganhou]
        vitoria[3] = true
        vitoria[4] = true
        vitoria[5] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[6] === mudar[7] && mudar[6]  === mudar[8] && mudar[6] != null && mudar[7] != null && mudar[8] != null){
        const vitoria = [...ganhou]
        vitoria[6] = true
        vitoria[7] = true
        vitoria[8] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      //Verificação horizontal:
      if(mudar[0] === mudar[3] && mudar[0]  === mudar[6] && mudar[0] != null && mudar[3] != null && mudar[6] != null){
        const vitoria = [...ganhou]
        vitoria[0] = true
        vitoria[3] = true
        vitoria[6] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[1] === mudar[4] && mudar[1]  === mudar[7] && mudar[1] != null && mudar[4] != null && mudar[7] != null){
        const vitoria = [...ganhou]
        vitoria[1] = true
        vitoria[4] = true
        vitoria[7] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[2] === mudar[5] && mudar[2]  === mudar[8] && mudar[2] != null && mudar[5] != null && mudar[8] != null){
        const vitoria = [...ganhou]
        vitoria[2] = true
        vitoria[5] = true
        vitoria[8] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      //Verificação diagonal:
      if(mudar[0] === mudar[4] && mudar[0]  === mudar[8] && mudar[0] != null && mudar[4] != null && mudar[8] != null){
        const vitoria = [...ganhou]
        vitoria[0] = true
        vitoria[4] = true
        vitoria[8] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[2] === mudar[4] && mudar[2]  === mudar[6] && mudar[2] != null && mudar[4] != null && mudar[6] != null){
        const vitoria = [...ganhou]
        vitoria[2] = true
        vitoria[4] = true
        vitoria[6] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[0] = pontos[0] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }
    }else{
      setVez(1)
      setControl(0)
      const mudar = [...peca]
      mudar[params] = "O"
      setpecas(mudar)
      //Verificação vertical:
      if(mudar[0] === mudar[1] && mudar[0]  === mudar[2] && mudar[0] != null && mudar[1] != null && mudar[2] != null){
        const vitoria = [...ganhou]
        vitoria[0] = true
        vitoria[1] = true
        vitoria[2] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[3] === mudar[4] && mudar[3]  === mudar[5] && mudar[3] != null && mudar[4] != null && mudar[5] != null){
        const vitoria = [...ganhou]
        vitoria[3] = true
        vitoria[4] = true
        vitoria[5] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[6] === mudar[7] && mudar[6]  === mudar[8] && mudar[6] != null && mudar[7] != null && mudar[8] != null){
        const vitoria = [...ganhou]
        vitoria[6] = true
        vitoria[7] = true
        vitoria[8] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      //Verificação horizontal:
      if(mudar[0] === mudar[3] && mudar[0]  === mudar[6] && mudar[0] != null && mudar[3] != null && mudar[6] != null){
        const vitoria = [...ganhou]
        vitoria[0] = true
        vitoria[3] = true
        vitoria[6] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[1] === mudar[4] && mudar[1]  === mudar[7] && mudar[1] != null && mudar[4] != null && mudar[7] != null){
        const vitoria = [...ganhou]
        vitoria[1] = true
        vitoria[4] = true
        vitoria[7] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[2] === mudar[5] && mudar[2]  === mudar[8] && mudar[2] != null && mudar[5] != null && mudar[8] != null){
        const vitoria = [...ganhou]
        vitoria[2] = true
        vitoria[5] = true
        vitoria[8] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      //Verificação diagonal:
      if(mudar[0] === mudar[4] && mudar[0]  === mudar[8] && mudar[0] != null && mudar[4] != null && mudar[8] != null){
        const vitoria = [...ganhou]
        vitoria[0] = true
        vitoria[4] = true
        vitoria[8] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
         //Desativando o click dos outros botões:
         states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }

      if(mudar[2] === mudar[4] && mudar[2]  === mudar[6] && mudar[2] != null && mudar[4] != null && mudar[6] != null){
        const vitoria = [...ganhou]
        vitoria[2] = true
        vitoria[4] = true
        vitoria[6] = true
        setGanhou(vitoria)
        //Setando placar:
        const pontos = [...placar]
        pontos[2] = pontos[2] + 1
        pontos[1] = pontos[1] + 1
        setPlacar(pontos)
        //Desativando o click dos outros botões:
        states.map((item, index) => {
          const reset = [...states]
          reset[index].ativo = true
          setStates(reset)
        })
      }
    }
  }

  const resetar = () => {
    
    states.map((item, index) => {
      const reset = [...states]
      reset[index].ativo = false
      setStates(reset)
    })

    return setpecas([]), setGanhou([])
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.topoX}>X</Text>
        <Text style={styles.topoCircle}>O</Text>

        
        <View style={styles.topoVez}>
          <Text style={{color: 'rgb(168, 190, 201)', fontSize: 18, textAlign: 'center', paddingTop: 12}}>{vez ? 'X' : 'O'} - Vez</Text>
        </View>
        <TouchableOpacity style={styles.restart} onPress={resetar}>
          <Image source={require('./assets/restart.png')} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>

        <TouchableOpacity style={[styles.card, ganhou[0] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(0)} disabled={states[0].ativo}>
          <View>
            <Text style={[peca[0] === "X" ? styles.x : styles.circle]}>{peca[0]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, ganhou[1] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(1)} disabled={states[1].ativo}>
          <View>
            <Text style={[peca[1] === "X" ? styles.x : styles.circle]}>{peca[1]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, ganhou[2] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(2)} disabled={states[2].ativo}>
          <View>
            <Text style={[peca[2] === "X" ? styles.x : styles.circle]}>{peca[2]}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, ganhou[3] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(3)} disabled={states[3].ativo}>
          <View>
            <Text style={[peca[3] === "X" ? styles.x : styles.circle]}>{peca[3]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, ganhou[4] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(4)} disabled={states[4].ativo}>
          <View>
            <Text style={[peca[4] === "X" ? styles.x : styles.circle]}>{peca[4]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, ganhou[5] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(5)} disabled={states[5].ativo}>
          <View>
            <Text style={[peca[5] === "X" ? styles.x : styles.circle]}>{peca[5]}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, ganhou[6] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(6)} disabled={states[6].ativo}>
          <View>
            <Text style={[peca[6] === "X" ? styles.x : styles.circle]}>{peca[6]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, ganhou[7] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(7)} disabled={states[7].ativo}>
          <View>
            <Text style={[peca[7] === "X" ? styles.x : styles.circle]}>{peca[7]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, ganhou[8] ? { borderWidth: 2, borderColor: 'green' } : '']} onPress={() => handlePress(8)} disabled={states[8].ativo}>
          <View>
            <Text style={[peca[8] === "X" ? styles.x : styles.circle]}>{peca[8]}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.gamer}>
          <Text style={{color: 'black', fontSize: 18, textAlign: 'center', paddingTop: 3}}>X (VOCÊ){'\n'}{placar[0]}</Text>
        </View>
        <View style={styles.partidas}>
          <Text style={{color: 'black', fontSize: 18, textAlign: 'center', paddingTop: 3}}>X Partida{'\n'}{placar[1]}</Text>
        </View>
        <View style={styles.cpu}>
          <Text style={{color: 'black', fontSize: 18, textAlign: 'center'}}>O (CPU){'\n'}{placar[2]}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(25, 42, 50)'
  },

  box: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  card: {
    width: '25%',
    height: 100,
    marginLeft: '6%',
    backgroundColor: 'rgb(31, 53, 64)',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 20,
    paddingTop: 15
  },

  x: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(50, 196, 193)',
    textAlign: 'center'
  },

  circle: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(231, 178, 68)'
  },

  topo: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },

  topoX: {
    color: 'rgb(50, 196, 193)', 
    fontWeight: 'bold', 
    fontSize: 40, 
    marginLeft: '5%'
  },

  topoCircle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(231, 178, 68)',
    marginLeft: 5
  },

  restart: {
    width: 60,
    height: 50,
    backgroundColor: 'rgb(168, 190, 201)',
    borderRadius: 10,
    borderBottomWidth: 3,
    marginLeft: '15%'
  },

  topoVez: {
    width: '25%',
    marginLeft: '15%',
    backgroundColor: 'rgb(31, 53, 64)',
    borderRadius: 10
  },

  gamer: {
    width: '25%',
    height: 60,
    marginLeft: '6%',
    backgroundColor: 'rgb(31, 53, 64)',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 20,
    paddingTop: 5,
    backgroundColor: 'rgb(50, 196, 193)'
  },

  partidas: {
    width: '25%',
    height: 60,
    marginLeft: '6%',
    backgroundColor: 'rgb(31, 53, 64)',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 20,
    paddingTop: 5,
    backgroundColor: 'rgb(168, 190, 201)'
  },

  cpu: {
    width: '25%',
    height: 60,
    marginLeft: '6%',
    backgroundColor: 'rgb(31, 53, 64)',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 20,
    paddingTop: 5,
    backgroundColor: 'rgb(231, 178, 68)'
  }
});
