import React from 'react'
import {
  StyleSheet, Text, View, Image, TextInput,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    padding: 10,
    height: 40,
    width: 200,
    borderColor: '#0af',
    borderRadius: 20,
    borderWidth: 2,
    color: 'lightslategrey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    flex: 0.5,
    aspectRatio: 3.82,
    resizeMode: 'contain',
  },
  textbar: {
    padding: 10, fontSize: 20, fontWeight: 'bold', color: 'lightslategrey',
  },
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 2 }}>
          <Image
            style={styles.logo}
            source={import('./ourpath_logo.png')}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.textbar}>
            {`Hello, my name is ${this.state.text}`}
          </Text>
        </View>
        <View style={{ flex: 2, alignItems: 'flex-end' }}>
          <TextInput
            style={styles.searchbar}
            placeholder="Enter your name..."
            autoCapitalize="words"
            clearButtonMode="while-editing"
            clearTextOnFocus
            padding={10}
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style={{ flex: 3 }} />
      </View>
    )
  }
}
