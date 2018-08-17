import React from 'react'
import {
  StyleSheet, Text, View, Image, TextInput
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
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={styles.container}>
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
    )
  }
}
