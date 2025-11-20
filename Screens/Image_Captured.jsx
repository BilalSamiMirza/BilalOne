import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ImageCaptured() {
  const [imageUri, setImageUri] = useState('');

  // 📷 Launch Camera
  const handleLaunchCamera = async () => {
    const response = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
      cameraType:'back',
      quality:1,
      saveToPhotos: true,
    });

    if (response.assets && response.assets.length > 0) {
      setImageUri(response.assets[0].uri);
    }
    console.log(response);
  };

//    Launch Gallery
  const handleLaunchGallery = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });

    if (response.assets && response.assets.length > 0) {
      setImageUri(response.assets[0].uri);
    }
    console.log(response);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Image Picker Example</Text>

      <TouchableOpacity style={styles.button} onPress={handleLaunchCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLaunchGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.imagePreview}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae6f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5e3aee',
  },
  button: {
    backgroundColor: '#a38df5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
