import { Button, View, Image, Pressable, Styles, StyleSheet, Text, Linking, label } from 'react-native';

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from '@expo/vector-icons'; 
import LinkScreen from './LinkScreen';


const PlaceholderImage = require('../assets/logo.jpg');

export function HomeScreen({ navigation }) {
    return (

<View style={styles.container} alignItems='center' pad>
    <View style={styles.headerContainer}>
      <Image source={PlaceholderImage} style={styles.header} />
    </View> 

    <View style={styles.bodyContent} >
      <View 
        style={[styles.buttonContainer, { borderWidth: 1, borderColor: "white", borderRadius: 16, height: 40, alignItems: 1 }]}
      >
       <Pressable
          style={[styles.button, {width: 315}]}
          onPress={() => Linking.openURL('https://www.contigoagency.com/get-a-quote-today/')}
          >
          <AntDesign 
            name="car" 
            size={24} 
             />
      
          <Text style={[styles.buttonLabel]}>
            {'\    '}Get a Quote 
          </Text>
       </Pressable>
       
      </View>
     
       <View 
        style={[styles.buttonContainer, { borderWidth: 1, borderColor: "white", borderRadius: 16, height: 40, alignItems: 'center' }]}
      >
       <Pressable
          style={[styles.button, {width: 315}]}
          onPress={() => Linking.openURL('https://www.contigoagency.com/carriers/')}
          >
          <AntDesign 
            name="car" 
            size={24} 
            color="#0f21bf" 
      
            />
      
          <Text style={(styles.buttonLabel)}>
         {'\   '}File a Claim
          </Text>
       </Pressable>
      </View>
      <View 
        style={[styles.buttonContainer, { borderWidth: 1, borderColor: "white", borderRadius: 16, height: 40, alignItems: 'center' }]}
      >
       <Pressable
          style={[styles.button, {width: 315}]}
          onPress={() => Linking.openURL('https://www.contigoagency.com/refer-a-friend/')}
          >
          <AntDesign 
            name="car" 
            size={24} 
            color="#0f21bf" 
      
            />
      
          <Text style={(styles.buttonLabel)}>
         {'\   '}Refer a Friend
          </Text>
       </Pressable>
      </View>
      <View 
        style={[styles.buttonContainer, { borderWidth: 1, borderColor: "white", borderRadius: 16, height: 40, alignItems: 'center' }]}
      >
       <Pressable
          style={[styles.button, {width: 315}]}
          onPress={() => Linking.openURL('https://www.contigoagency.com/locations/')}
          >
          <AntDesign 
            name="car" 
            size={24} 
            color="#0f21bf" 
      
            />
      
          <Text style={(styles.buttonLabel)}>
         {'\   '}Locations
          </Text>
       </Pressable>
      </View>
      
    </View>


<View style={styles.footerContainer}>
  <View
    style={[styles.buttonContainer, { borderWidth: 2, borderColor: "#fafa05", borderRadius: 16, alignItems: "center" }]}
      >
        <Pressable
          style={[styles.button, { alignItems: "center" }]}
          onPress={() => navigation.navigate('Camera')}
        >
          <FontAwesome
            name="picture-o"
            size={24}
            color="#0f21bf"
            style={[styles.buttonIcon, { alignItems: "center", justifyContent: "center" }]}
          />
          
          <Text style={[styles.buttonLabel, { color: "#0f21bf", textAlign: "center" }]}>Take a Picture</Text>
        </Pressable>
        </View>
    </View>
        
</View>

     /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
         <Button
          title="Take a Picture"
          onPress={() => navigation.navigate('Camera')}
        />
      </View> */
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
    bodyContent: {
      borderWidth: 2,
      borderColor: 'white',
      alignItems: 'center',
      height: 500,
      borderRadius: 16,
      alignContent: 'space-around',
      padding: 10,
      paddingVertical: 10,
      flexDirection: 'column',
      rowGap: 10
     

    },
    imageContainer: {
      flex: 1,
      paddingTop: 70,
    },
    headerContainer: {
      flex: 0,
      paddingTop: 10,
      paddingBottom: 10
    },
     footerContainer: {
    flex: 1 / 3,
    paddingTop: 10,
    alignItems: 'center',

  },
    header: {
      width: 320,
      height: 100,
      borderRadius: 16,
      paddingBottom: 50
    },
    buttonContainer: {
      width: 320,
      height: 60,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      
      backgroundColor: '#6885a6',
      borderRadius: 16,
    },
    button: {
      borderRadius: 16,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'left',
      padding: 10,
      flexDirection: 'row',
      backgroundColor: "#8ea4bd",
      color: '#0f21bf'
    },
    body: {
      borderRadius: 16,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      color: '#bec0d1'
    },
    buttonIcon: {
      paddingRight: 2,
    },
    buttonLabel: {
      color: '#0f21bf',
      fontSize: 14,
    },
  });

  