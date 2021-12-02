import React from "react";
import { FlatList, View, TouchableHighlight, Pressable } from "react-native";
import styles from "./searchStyles";
import { Layout, TopNav, Text, themeColor, useTheme, TextInput,} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../src/database/mockAPI";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState([]);

  // useLayoutEffect(() => {
  //   // navigation.setOptions({
  //   //   headerLeft: () => (
  //   //   ),
  //   //   headerTitle: () => (
  //   //   ),
  //   //   headerRight: () => <View />,
  //   // });
  // }, [value]);

  // useEffect(() => {}, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent={
          <TextInput
            placeholder="Search"
            value={text}
            onChangeText={(value) => setText(value)}
            leftContent={
              <Ionicons 
                name="search" 
                size={20} 
                color={isDarkmode ? themeColor.white100 : themeColor.black} 
              />
            }
          />
        }
        //middleAction={handleSearch}
        
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontWeight="bold">Search screen - in build</Text>
      </View>
      {/* <View>
        <FlatList
          vertical showsVerticalScrollIndicator={false} 
          numColumns={2} 
          data={data} 
          renderItem={renderRecipes} 
          keyExtractor={(item) => `${item.recipeId}`} 
        />
      </View> */}
    </Layout>
  );
}
