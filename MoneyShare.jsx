import { View, Text, Image, TextInput, StyleSheet ,TouchableOpacity , TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, { useState } from 'react';
// import twice from './assets/twice.png';
import CheckBox from 'expo-checkbox';


//ฟังชั่นคำนวณเงิน
const calMoneyShare = () => {
  // validate
  // if (money == '' || people == '') {
  //   alert('กรุณาป้อนจำนวนเงินและจำนวนคน');
  //   return;
  // }
  // if (tipStatus == true && tip == '') {
  //   alert('กรุณาป้อนจำนวนทิป');
  //   return;
  // }
  // คำนวณ
  // let m = parseFloat(money);
  // let p = parseFloat(people);
  // let t = tipStatus == true ? parseFloat(tip) : 0;
  // let ms = (m + t) / p;
  // setMoneyShare(ms.toFixed(2));
  // setMoneyShare(((parseFloat(money) + (tipStatus == true ? parseFloat(tip) : 0)) / parseFloat(people)).toFixed(2));

};

const MoneyShare = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [money, setMoney] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState(true);
  const [tipStatus, setTipStatus] = useState(false);
  const [moneyShare, setMoneyShare] = useState('0.00');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ width: '100%', height: '100%' ,alignItems: 'center' }}>
      <View style={styles.appbar}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          Money Share
        </Text>
      </View>
      <Image source={require('./assets/twice.png')} style={styles.showLogo} />
      <TextInput value={money} onChangeText={setMoney} placeholder="ป้อนจำนวนเงิน" style={styles.inputnumber} keyboardType="numeric"/>
      <TextInput value={people} onChangeText={setPeople} placeholder="ป้อนจำนวนคน" style={styles.inputnumber} keyboardType="numeric"/>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: 'row'}}>
        <CheckBox value={tipStatus} onChange={(value) => { setTipStatus(value);}} />
        <view style={{ height: 10 }}/>
        <Text>ทิปพนักงาน</Text>
      </View>
      <TextInput value={tip} onChangeText={setTip} placeholder="ป้อนจำนวนทิป" style={styles.inputnumber} keyboardType="numeric"/>
      <TouchableOpacity style={styles.btnCal} onPress={calMoneyShare}>
        <Text style={{ color: '#fff', fontSize: 20 }}>คำนวณ</Text>
      </TouchableOpacity>
      <View style={{ height: 30 }} />
      <Text>หารคนละ</Text>
      <Text style={{ color: 'green', fontSize: 60, fontWeight: 'bold' }}>{moneyShare}</Text>
      <Text>บาท</Text>
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