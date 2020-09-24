import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage,
  ImageBackground
} from "react-native";

export default class ChooseLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  artistLogin = () => {
    const { email, password } = this.state;

    if (email != "a") {
      alert("Please fill correct credentials");
      return false;
    } else if (password != "a") {
      alert("Please fill correct credentials");
      return false;
    }
    return true;
  };

  promoterLogin = () => {
    const { email, password } = this.state;

    if (email != "promoter@maajja.com") {
      alert("Please fill correct credentials");
      return false;
    } else if (password != "promoter") {
      alert("Please fill correct credentials");
      return false;
    }
    return true;
  };

  making_api_call = () => {
    if (this.artistLogin()) {
      const { email, password } = this.state;
      let mylogin = {
        email: email,
        password: password
      };
      AsyncStorage.setItem("mylogin", JSON.stringify(mylogin));

      this.props.navigation.navigate("Home");
    } else if (this.promoterLogin()) {
      const { email, password } = this.state;
      let mylogin = {
        email: email,
        password: password
      };
      AsyncStorage.setItem("mylogin", JSON.stringify(mylogin));

      this.props.navigation.navigate("PromoterHome");
    }
  };

  showData = async () => {
    let mylogin = await AsyncStorage.getItem("mylogin");
    let d = JSON.parse(mylogin);
    //alert(d.email + "" + d.password);
  };

  componentDidMount() {
    this.showData().then(mylogin => {
      if (mylogin) this.setState({ mylogin: mylogin });
    });
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/AR.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username or Email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            placeholderTextColor="#808080"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={email => this.setState({ email })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            returnKeyType="go"
            secureTextEntry
            placeholderTextColor="#808080"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordInput = input)}
          />

          <TouchableOpacity
            style={styles.signinButton}
            onPress={async () => {
              try {
                const result = await AsyncStorage.setItem(
                  "personal_data",
                  JSON.stringify(this.state)
                );
                this.making_api_call();
              } catch (error) {
                alert("Failed");
              }
            }}
          >
            <Text style={styles.submitButtonText}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 200
  },
  input: {
    color: "white",
    marginBottom: 10,
    height: 50,
    borderColor: "#9B51E0",
    paddingHorizontal: 10,
    borderWidth: 1
  },
  signinButton: {
    backgroundColor: "#9B51E0",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 15,
    height: 50
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});
