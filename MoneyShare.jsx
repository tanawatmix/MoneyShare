import { View, Text, Image, TextInput, StyleSheet ,TouchableOpacity , TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, { useState } from 'react';
import twice from './assets/twice.png';
import CheckBox from 'expo-checkbox';

const MoneyShare = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ width: '100%', height: '100%' ,alignItems: 'center' }}>
      <View style={styles.appbar}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          Money Share
        </Text>
      </View>
      <Image source={twice} style={styles.showLogo} />
      
      <TextInput placeholder="ป้อนจำนวนเงิน" style={styles.inputnumber} keyboardType="numeric"/>
      
      <TextInput placeholder="ป้อนจำนวนคน" style={styles.inputnumber} keyboardType="numeric"/>
      
      <View style={{ height: 50 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
      </View>
      <Text>ทิปพนักงาน</Text>
      </View>
    </TouchableWithoutFeedback>
    );
};

export default MoneyShare;

const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  titletext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  showLogo: {
    width: 150,
    height: 150,
    marginVertical: 50,
  },
  inputnumber: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  btnCal: {
    width: '80%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30,
  },
});