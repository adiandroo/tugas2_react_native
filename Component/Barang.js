import React, { Component } from "react"
import { Text, View, TextInput } from "react-native";

export default class Barang extends Component {
constructor(props){
  super(props);
  this.state={
  inputbarang:"",
  inputjumlah:""
};
}

handleInput = (event) => {
  this.setState({inputbarang: event});
}

handleJumlah = (event) => {
    this.setState({inputjumlah: event});
}

  render() {
  return (
    <View>
      <TextInput onChangeText={this.handleInput} placeholder="Masukkan Nama Barang" value={this.state.inputbarang}/>
      <TextInput onChangeText={this.handleJumlah} placeholder="Masukkan Jumlah" keyboardType="numeric" value={this.state.inputjumlah}/>    
      <Text>{this.props.namabelanja}</Text>
      <Text>
        Nama Barang: {this.state.inputbarang}
      </Text>
      <Text>
      Jumlah Barang: {this.state.inputjumlah}
      </Text>
      </View>
    );
  }
}