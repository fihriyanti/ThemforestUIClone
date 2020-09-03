/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Button} from 'native-base';

const App = () => {
  return (
      <SafeAreaView>
        <ScrollView>
            <View style={styles.bgAtas}>
              <View>
                <Image source = {require('./image/logo.png')}
                style = {styles.logo}/>
              </View>
              <View>
                <Text style={styles.judul}>
                  Cexzlek 
                </Text>
              </View>
              <View>
                <Text style={styles.bwhJudul}>
                  Stream music anywhere
                </Text>
              </View>
              <View>
                <Text style={styles.bwhJudul2}>
                   Let music flow in your heart and enrich your soul
                </Text>
              </View>
              <View style={styles.bgBawah}>
                <View>
                  <Button iconLeft full rounded style={styles.btn1}>
                      <Text style={{color:"#fff"}}>
                        Connect with Facebook
                      </Text>
                  </Button>
                </View>
                <View>
                  <Button full rounded style={styles.btn2}>
                      <Text style={{color:"#fff"}}>
                        Connect with Twitter
                      </Text>
                  </Button>
                </View>
                <View>
                  <Button full rounded style={styles.btn3}>
                      <Text style={{color:"#fff"}}>
                        Connect with Email
                      </Text>
                  </Button>
                </View>
              <View>
                <Text style={styles.tx1}>Don't have an account? 
                  <Text style={styles.tx2}>Register Now!</Text>
                </Text>
              </View>
              </View>
            </View> 
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  logo: {
    marginTop : 50,
    width: 100, 
    height: 100,
    alignSelf: 'center'
  },
  judul:{
    alignSelf: 'center', 
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'serif'
  },  
  bgAtas: {
    backgroundColor: '#EF5350'
  },
  bwhJudul: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 10,
  },
  bwhJudul2: {
    marginTop: 35,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    marginBottom: 35
  },
  bgBawah: {
    flex: 3,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  btn1: {
    backgroundColor: "#01579b",
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop : 40, 
    marginLeft: 30, 
    marginRight: 30,
  },
  btn2: {
    backgroundColor: "#4fc3f7",
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop : 20,
    marginLeft: 30, 
    marginRight: 30    
  },
  btn3: {
    backgroundColor: "#ff8a85",
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop : 20,
    marginLeft: 30, 
    marginRight: 30    
  },
  tx1: {
    marginTop: 20,
    fontSize: 10,
    textAlign: 'center',
    marginRight: 20
  },
  tx2: {
    color: '#ff5252',
    fontSize: 10,
    marginStart: 10
  }
});

export default App;
