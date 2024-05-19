import { StyleSheet } from "react-native";

/* fonts */
export const FontFamily = {
  robotoBold: "Roboto-Bold",
  robotoMedium: "Roboto-Medium",
  robotoRegular: "Roboto-Regular",
  robotoLight: "Roboto-Light",
  mulishSemiBold: "Mulish-SemiBold",
};

/* font sizes */
export const FontSize = {
  size_xl: 24,
  size_lgi: 20,
  size_mid: 19,
  size_sm: 17,
  size_xs: 14,
};
/* Colors */
export const Color = {
  white: "#fff",
  black: "#000",
  darkgray: "#121212",
  gray_100: "#fefefe",
  gray_200: "#202020",
  lightGrey: "#bbc8d4",
  purple: "#6E45E2",
  lightBlue: "#88D3CE",
  blue: "#4FACFE",
};

/* border radiuses */
export const Border = {
  br_sm: 14,
  br_base: 16,
  br_lg: 20,
  br_9xs: 4,
  br_2xs: 11,
  br_3xs: 10,
};

export const GlobalStyles = StyleSheet.create({
  topIcon: {
    margin: 20,
    marginTop: 5,
    right: 0,
    width: 34,
    height: 34,
    position: "absolute",
  },
  h1: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    margin: 10,
    marginTop: 20,
    width: "100%",
  },
  h2: {
    alignSelf: "left",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0,
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
    margin: 10,
    marginTop: 20,
    width: "100%",
  },
  h3: {
    alignSelf: "left",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    margin: 10,
    marginTop: 5,
    width: "100%",
  },
  body: {
    fontSize: FontSize.size_xs,
    color: Color.darkgray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  background: {
    backgroundColor: Color.white,
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
  headerIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 30,
  },
});
