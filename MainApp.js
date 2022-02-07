import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import InputField from "./InputField";

const MainApp = () => {
  const defaultListCount = 3;
  const [listCount, setlistCount] = useState(defaultListCount);
  const [state, dispatch] = useStateValue();
  useEffect(() => {}, [state]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAA3lBMVEXn6Orr7O7v8PLx8vQogsE1hsLu6+zq6+0ogb7Y2dvn6Onr6+txcXIAAADh4uSmv9mguNLMzM4zMzSMjI5SUlMsgqMqgZ00hrgAc7gqgcRlndEnJyiurrAwg6vV2+Ysg8YogK2LsMkiIiRiYmM5OjscHB2ampuzs7Xu7+ra4+WauMtZlrUcfaZTkrdrn7gUfLMAep40ia9xocVsoK+5ytXF1t9alcCPtNIIeZVHiqhWl6QqhaFLj8W4yuCBrb1IkanI19qmv8lvncsAbb2IrdRoaWpISEmTk5V/f4AREhNmlh9TAAAElElEQVR4nO3ae3eaSBgG8LlERkDtgqLbotZEBDQ2sWnNZbNpm25jzPf/QvvOgPG2m792wzE8v3OSGMFzmId3LiCMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAWZ+tPaTksTd3GuMFEWvShFM0R/clpbzodDD4d911V5spIx2fTaY8MeoPB+cWYlzcMazKbBj2TBel0qlei6EMqiOOezXQS0+nnT5/PdRad8wur6KMqhvtlFgS96elXZtH4OT82lXHhFn1YRUgn1wGZW8oxo4TVvzynyrgq4Xzi9q/bQXDTsJ6HSze9oDCq8/JVhvgjaLdv2brhlEl6WalU/uQFHlUhrPl1uz2bb3eIlHUqlepd2Qoj/UZZfLF21hPpb9XK0WXZRoz0VpfFfgVUK5WjcQHHUyCHUVkE+1Gkl9XK+5KNnuoHZfF9b2HluL+ok5RswDBZnO0vMs2A8a5cWTCTxf4g6ZYwC73Sat8iC83ilMX1ePcS3eElzIK5Z0F7dr97v6KUWTjuvZ5UkQUzFx80Xsy+7cwkeRZW6irXdVUxx/b6+GTWDmb31lYN5Fmk7+6MstzYcazvbRoyJvr2xbqnZPNI/6/f35MPpekr7ljfypmd/rAs6g+uZX6ytVZfR/Hx44ey1IW+kdUOgl5venN893Vl/jPP4qhcWVBl3OQ3f6f6PvjgnHQq5cyCue5x9vVI/p2AVtYsdD/59lwWHV0XlWp1PXaW7KaO44r5/eQ4d2X0xxe/tJKtuQyaP6wNruOYmcUtYRQAAFu45EwIuvI0TxVwRW8wJfVXZEqIbItB/8jsi7Pnxw8UX20Rb+KRBNGNwuhk6Aleo/bwrieaYeT7XcG4NzyJTlqeaaZqPJxEo6Z+rWp5w5UdmzBqtGX5BqYWtajZQnLPb8onSck0kyhmUjSGNZmMPC6FN0pMg0eJkGo5pH14KPPPejoV4XeptOLFwVeGjLpSdwIlh7Gvs3gME9MoOUxCpkPgrK5/x486ABna9NrfzEIlNbOl5R34DR4eL/N20ekNTRaL7A1l1+PsTIuYegJvdk11NNhuFrz7mO3XeNUj/++Jp+eTyZOsj8T5gwWybmfblDfUZ38hV08c7NSFPZJv4lmERiTX/9RNFt1VFv7qRNstPSos/cTOGr2dhe5WXVuKA+8h1MzhesTjo+0soq0smPCWUbhkai8LJuzm4qTWOPQwXqqLnSxotSFZ/MT2s6BlhlTduv1aB/0/+Yfx4l+yyPaT8SMtzHy1+kjtuazExuvDtDGPyCh8KQvPvK28B1pjDr18vVnTY2e+xT74BYYMExOGkg9N/4Us+JOt3xdxk1PrI7Mm4Xa4pGQiE8bh1wXxlw0ppRct5dML8wj36h7tluh1F+20sKUUtC41c6rZ4q2m4EMmYroeCVue5HpO4XGSN0k8rPawl3rm9Bb6siWbLUTi02dqzKYqofJo0ZaW/RYWGXRZ2lBy4zo1ty75fBqh3cTGZ7jIr1P1Fnb46wsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMbfzk5nM9ew0qAAAAAASUVORK5CYII=",
        }}
      />
      <Text style={styles.mainHeading}>Amsus Technologies</Text>
      <Text style={styles.baseHeading}>GI</Text>
      <Text style={styles.baseHeading}>PPGI</Text>

      <View style={styles.totalFields}>
        <Text style={styles.totalText}>Price/gram</Text>
        <Text style={styles.totalText}>Weight(g)</Text>
        <Text style={styles.totalText}>Cost</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        behavior="height"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView style={styles.styleContainer}>
          {Array(listCount)
            .fill(<InputField />)
            .map((item, index) => (
              <InputField key={index} reset={state.reset} id={index} />
            ))}
        </ScrollView>
      </KeyboardAvoidingView>
      <View>
        <Button
          title="Add Fields"
          color={"#53caff"}
          onPress={() => setlistCount(listCount + 1)}
        />
        <Button
          title="Reset Fields"
          color={"red"}
          onPress={() => {
            setlistCount(defaultListCount);
            dispatch({
              type: "RESET_ITEMS",
            });
          }}
        />
      </View>

      <View style={styles.totalFields}>
        <Text style={styles.totalText}>Total Price</Text>
        <Text style={styles.totalText}>Total Weight(g)</Text>
        <Text style={styles.totalText}>Total Cost</Text>
      </View>

      <View style={styles.totalFields}>
        <Text style={styles.totalText}>{state.ppgSum}</Text>
        <Text style={styles.totalText}>{state.weightSum}</Text>
        <Text style={styles.totalText}>{state.totalSum}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
  },
  mainHeading: {
    fontSize: 30,
  },
  baseHeading: {
    fontSize: 20,
    textAlign: "center",
  },
  totalFields: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    padding: 5,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    height: 50,
    textAlignVertical: "center",
  },
  image: {
    width: 250,
    height: 250,
    flex: 1,
    marginHorizontal: 10,
  },
  styleContainer: {
    borderWidth: 1,
    borderColor: "black",
    height: 100,
    marginVertical: 10,
  },
});
export default MainApp;
