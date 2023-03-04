import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking, Pressable } from 'react-native';

const FONTSIZE = 20;
let album_height = 500;

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <Image source={require('./assets/boysaliarpt2albumart.jpg')} style={styles.albumImg} />
      <View style={styles.songBox}>
        <Text style={styles.songName}>Boy's a liar Pt.2</Text>
        <Text style={styles.artist}>PinkPantheress, Ice Spice</Text>
        <View style={styles.songLink}>
          <Pressable  onPress={() => Linking.openURL('https://music.apple.com/us/album/boys-a-liar-pt-2/1664929598?i=1664929603')} 
            accessibilityLabel='Apple Music Link'
            style={{textAlign: "center", width: "100%", backgroundColor: "pink"}}>
               <Text style={styles.text}>Apple Music</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL('https://open.spotify.com/album/6cVfHBcp3AdpYY0bBglkLN')} 
            title="Spotify" 
            accessibilityLabel='Spotify Link' 
            style={{textAlign: "center", width: "100%", backgroundColor: "red"}}>
              <Text style={styles.text}>Spotify</Text>
          </Pressable>  
          <Pressable onPress={() => Linking.openURL('https://soundcloud.com/pinkpantheress/boys-a-liar-pt-2')} 
            title="SoundCloud" 
            color="orange" 
            accessibilityLabel='SoundCloud Link'
            style={{textAlign: "center", width: "100%", backgroundColor: "green"}}>
              <Text style={styles.text}>SoundCloud</Text>
          </Pressable>   
          <Pressable onPress={() => Linking.openURL('https://www.pandora.com/artist/pinkpantheress-and-ice-spice/boys-a-liar-pt-2/boys-a-liar-pt-2/TRxtKX2n5JKxh92')} 
            title="Pandora" 
            color="navy" 
            accessibilityLabel='Pandora Link'
            style={{textAlign: "center", width: "100%", backgroundColor: "brown"}}>
              <Text style={styles.text}>Pandora</Text>
          </Pressable>  
          <Pressable onPress={() => Linking.openURL('https://music.youtube.com/playlist?list=OLAK5uy_lkwjSwkRu_uGVP6VoUajPArhmidjIoQXY')} 
            accessibilityLabel='YouTube Music Link'
            style={{textAlign: "center", width: "100%", backgroundColor: "purple"}}>
              <Text style={styles.text}>Youtube Music</Text>
          </Pressable>  
          <Pressable onPress={() => Linking.openURL('https://music.amazon.com/albums/B0BS74DNSS')} 
            accessibilityLabel='Amazon Music Link'
            style={{textAlign: "center", width: "100%", backgroundColor: "blue"}}>
              <Text style={styles.text}>Amazon Music</Text>
          </Pressable> 
        </View>    
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  songBox: {
    width: "50%",
    height: "100%",
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'left',
  },
  artist: {
    width: "80%",
    height: "100%",
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: FONTSIZE,
    opacity: '80%',
    margin: 30,
    fontWeight: "bold",
  },
  songName: {
    fontSize: FONTSIZE,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: FONTSIZE,
    fontWeight: 'bold',

  },
  songLink: {
    fontSize: FONTSIZE,
    fontWeight: 'bold',

  },
  
  albumImg: {
    width: "100%",
    maxWidth: 500,
    height: "60%",
    borderRadius: 2,
    resizeMode: 'contain',
    padding: 0,
    margin: 0,
  },

  songLink: {
    width: "100%",
    borderRadius: 2,
  },

});
