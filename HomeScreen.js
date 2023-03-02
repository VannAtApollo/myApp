import { Button, View, Image, Styles, StyleSheet } from 'react-native';


const PlaceholderImage = require('../assets/logo.jpg');

export function HomeScreen({ navigation }) {
    return (

<View style={styles.container}>
     <View style={styles.headerContainer}>
     <Image source={PlaceholderImage} style={styles.header} />
      </View> 
      <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
         <Button
          title="Take a Picture"
          onPress={() => navigation.navigate('Camera')}
        /> 
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
    imageContainer: {
      flex: 1,
      paddingTop: 70,
    },
    headerContainer: {
      flex: 0,
      paddingTop: 40,
    },
    
    header: {
      width: 320,
      height: 100,
      borderRadius: 16,
    },
  });

  