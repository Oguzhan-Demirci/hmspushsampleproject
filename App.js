import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { NativeModules } from 'react-native'

export default class App extends Component {
  
  state = {
    message: 'TOKEN'
  }

getMessage = () => {
    
		NativeModules.RNHmsInstanceId.getToken((retcode, token) => {
				let msg = '';
				
				if (retcode == 0) {
					msg = token;
				} else {
					msg = msg + 'getToken exception, error:' + token + '\n';      
				}  		
				console.log(msg)
				
				this.setState ({ message: msg });
							
			});
			
		
			
		
	};
	
	/*
	const eventTokenEmitter = new NativeEventEmitter(NativeModules.ToastExample);
	this.listenerToken = eventTokenEmitter.addListener(
	'PushTokenReceiverEvent',
	event => {
		const msg = 'received token:' + event.token + '\n';
	},);
	*/
  
  

  render() {
    return (
      <View style={{paddingTop: 100}}>
        <Text>{this.state.message}</Text>
        <Button title="GET TOKEN" onPress={this.getMessage} />
      </View>
    )
  }
}