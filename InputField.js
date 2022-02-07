import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useStateValue } from "./StateProvider";

const InputField = ({ id }) => {
  const [{ reset }, dispatch] = useStateValue();
  const [state, setstate] = useState({
    ppg: "",
    weight: "",
    total: "",
    event: "",
  });
  useEffect(() => {
    dispatch({
      type: "CREATE_ITEM",
      payload: {
        id,
        ppg: 0,
        weight: 0,
        total: 0,
      },
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        id,
        ppg: Number(state.ppg),
        weight: Number(state.weight),
        total: state.weight * state.ppg,
      },
    });
  }, [state]);
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.baseText}
        value={state.ppg}
        onChangeText={(e) => {
          setstate({
            ...state,
            ppg: e,
            event: "ppg",
          });
        }}
      />
      <TextInput
        style={styles.baseText}
        value={state.weight}
        onChangeText={(e) => {
          setstate({
            ...state,
            weight: e,
            event: "weight",
          });
        }}
      />
      <Text style={styles.baseText}>{state.ppg * state.weight}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  baseText: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    padding: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
export default InputField;
