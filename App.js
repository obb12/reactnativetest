/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';



const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, padding: 24 }}>
             <FlatList
               data={data}
               keyExtractor={({ id }, index) => id}
               renderItem={({ item }) => (
                 <Text>{item.title}, {item.releaseYear}</Text>
               )}
             />

         </View>
    </>
  );
};


export default App;
