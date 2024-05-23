import React from "react";
import { View } from "react-native";
import { Border } from "../../GlobalStyles";

const WhiteBox = ({ children, height }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: Border.br_xl,
        height: height, // 높이를 부를 때마다 다르게 조절 가능, 기본값은 50
        borderWidth: 1,
        borderColor: "transparent",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 10,
      }}
    >
      {children}
    </View>
  );
};

export default WhiteBox;
