import { StyleSheet, Image } from 'react-native';
import { Button, View, Pressable, Styles, Text, Linking, label } from 'react-native';


import { AntDesign } from '@expo/vector-icons'; 



export function LinkScreen() {
  return (
    <View style={styles.bodyContent}>
      <View 
        style={[styles.buttonContainer, { borderWidth: 1, borderColor: "white", borderRadius: 16, height: 40 }]}
      >
       <Pressable
          style={[styles.button, {width: 315}]}
          onPress={() => Linking.openURL('https://www.contigoagency.com/get-a-quote-today/')}
          >
          <AntDesign 
            name="car" 
            size={24} 
            color="yellow" 
            borderWidth="4" />
      
          <Text style={[styles.buttonLabel, { color: "#fafa05" }]}>
            Get a Quote
          </Text>
       </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  links: {
    width: 320,
    flex: 1,
    height: 440,
    borderRadius: 18,
  }
});