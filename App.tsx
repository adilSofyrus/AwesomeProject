// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import type { PropsWithChildren } from 'react';
// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   SectionList,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useColorScheme,
//   View
// } from 'react-native';

// import {
//   Colors
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View >
//       <Text>
//         {title}
//       </Text>
//       <Text>
//         {children}
//       </Text>
//     </View>
//   );
// }
// interface TabProps {
//   isActive: boolean;
//   label: string;
//   onPress: () => void; 
// }


// const Tab: React.FC<TabProps> = ({ isActive, label, onPress }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.tab, isActive ? styles.activeTab : null]}>
//     <Text style={styles.tabText}>{label}</Text>
//   </TouchableOpacity>
// );

// function App() {
//   const [activeTab, setActiveTab] = useState('Section1');
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const sections = {
//     Section1: [
//       { title: 'Section 1', data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'] },
//     ],
//     Section2: [
//       { title: 'Section 2', data: ['Item 21', 'Item 22', 'Item 23', 'Item 24', 'Item 25', 'Item 26', 'Item 27', 'Item 28', 'Item 29', 'Item 30'] },
//     ],
//   };


//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
//         <View style={styles.tabs}>
//           <Tab isActive={activeTab === 'Section1'} label="Section 1" onPress={() => setActiveTab('Section1')} />
//           <Tab isActive={activeTab === 'Section2'} label="Section 2" onPress={() => setActiveTab('Section2')} />
//         </View>
//         <View>
//           <SectionList
//              sections= {sections[activeTab]}
//              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//             renderSectionHeader={({ section: { title } }) => (
//               <Text style={styles.header}>{title}</Text>
//             )}
//             keyExtractor={(item, index) => item + index}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   tabs: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   tab: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginHorizontal: 5,
//     borderBottomWidth: 2,
//     borderBottomColor: 'transparent',
//   },
//   activeTab: {
//     borderBottomColor: 'blue',
//   },
//   tabText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   item: {
//     textAlign: 'center',
//     fontSize: 18,
//     backgroundColor: '#f9c2ff',
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     padding: 12,
//   },
//   header: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 10,
//   },
// });

// export default App;

// export default App;


// import React from "react";
// import { Text, View } from "react-native";

// // Define the app component 
// const App = () => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello World</Text>
//     </View>
//     );
// }

//  export default App;
// import React, { useEffect, useState } from 'react';
// import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// // Dummy data fetching function
// const fetchData = async () => {

//   return [
//     { id: '1', title: 'Card 1', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21129-5-zelda-link-transparent.png' },
//     { id: '2', title: 'Card 2', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21249-6-zelda-link-hd.png' },
//     { id: '3', title: 'Card 3', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21238-3-zelda-link-transparent-picture.png' },
//     { id: '1', title: 'Card 4', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21441-2-zelda-link-file.png' },
//     { id: '2', title: 'Card 5', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21382-1-zelda-link-image.png' },
//     { id: '3', title: 'Card 6', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21344-9-zelda-link-transparent-background.png' },
//     { id: '1', title: 'Card 7', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21286-9-zelda-link-clipart.png' },
//     { id: '2', title: 'Card 8', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/20983-8-zelda-link-photo.png' },
//     { id: '3', title: 'Card 9', imageUrl: 'https://freepngimg.com/thumb/the_legend_of_zelda/21544-5-zelda-link-picture.png' },
//   ];
// };

// interface CardData {
//   id: string;
//   title: string;
//   imageUrl: string;
// }

// const App: React.FC = ()=> {
//   const [data, setData] = useState<CardData[]>([]);
//   //const [data, setData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const apiData = await fetchData();
//       setData(apiData);
//     };

//     getData();
//   }, []);

  
//   return (
//   <SafeAreaView>
//       <FlatList
//       data={data}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <Image source={{ uri: item.imageUrl }} style={styles.image} />
//           <Text style={styles.text}>{item.title}</Text>
//         </View>
//       )}
//       keyExtractor={item => item.id}
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
//     />
//   </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     height: Dimensions.get('window').width * 0.22, 
//     width: Dimensions.get('window').width * 0.25,
//     marginRight: 20,
//     alignItems: 'center',
//     borderRadius: 12,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     borderWidth:2,
//     borderColor:'green',
//     justifyContent: 'flex-end', 
//     marginTop:24,
//     marginLeft:12,
//     marginEnd:0,
//   },
//   image: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     width: '100%',
//     height: '100%',
//     borderRadius: 10, 
//     resizeMode: 'contain',
    
//   },
//   text: {
//     marginBottom: 10,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default App;
