import React from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../src/database/mockAPI";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = React.useState('');
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
            onChangeText={(val) => setText(val)}
            leftContent={
              <Ionicons 
                name="search" 
                size={20} 
                color={isDarkmode ? themeColor.white100 : themeColor.black} 
              />
            }
          />
        }
        //middleAction={() => /*get()*/}
        
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Text fontWeight="bold">Search screen - in build</Text>
      </View>
    </Layout>
  );
}
