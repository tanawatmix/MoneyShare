import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";

const MoneyShare = () => {
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [tipStatus, setTipStatus] = useState(false);
  const [moneyShare, setMoneyShare] = useState("0.00");

  // Function to calculate money share
  const calMoneyShare = () => {
    // Validate inputs
    if (money === "" || people === "") {
      alert("กรุณาป้อนจำนวนเงินและจำนวนคน");
      return;
    }
    if (tipStatus && tip === "") {
      alert("กรุณาป้อนจำนวนทิป");
      return;
    }

    // Calculate
    const m = parseFloat(money);
    const p = parseFloat(people);
    const t = tipStatus ? parseFloat(tip) : 0;

    if (p === 0) {
      alert("จำนวนคนต้องมากกว่า 0");
      return;
    }

    const ms = (m + t) / p;
    setMoneyShare(ms.toFixed(2));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.appbarText}>Money Share</Text>
        </View>
        <Image source={require("./assets/twice.png")} style={styles.showLogo} />
        <TextInput
          value={money}
          onChangeText={setMoney}
          placeholder="ป้อนจำนวนเงิน"
          style={styles.inputnumber}
          keyboardType="numeric"
        />
        <TextInput
          value={people}
          onChangeText={setPeople}
          placeholder="ป้อนจำนวนคน"
          style={styles.inputnumber}
          keyboardType="numeric"
        />
        <View style={styles.checkboxContainer}>
          {" "}
          <CheckBox value={tipStatus} onValueChange={setTipStatus} />
          <Text style={styles.checkboxLabel}>ทิปพนักงาน</Text>
        </View>
        {tipStatus && (
          <TextInput
            value={tip}
            onChangeText={setTip}
            placeholder="ป้อนจำนวนทิป"
            style={styles.inputnumber}
            keyboardType="numeric"
          />
        )}
        <TouchableOpacity style={styles.btnCal} onPress={calMoneyShare}>
          <Text style={styles.btnCalText}>คำนวณ</Text>
        </TouchableOpacity>
        <Text style={styles.resultLabel}>หารคนละ</Text>
        <Text style={styles.resultValue}>{moneyShare}</Text>
        <Text style={styles.resultUnit}>บาท</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MoneyShare;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  appbar: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  appbarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  showLogo: {
    width: 150,
    height: 150,
    marginVertical: 50,
  },
  inputnumber: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  btnCal: {
    width: "80%",
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30,
  },
  btnCalText: {
    color: "#fff",
    fontSize: 20,
  },
  resultLabel: {
    fontSize: 18,
  },
  resultValue: {
    color: "green",
    fontSize: 60,
    fontWeight: "bold",
  },
  resultUnit: {
    fontSize: 18,
  },
});
