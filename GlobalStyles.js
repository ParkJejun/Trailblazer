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
  size_smi: 12,
};
/* Colors */
export const Color = {
  white: "#fff",
  black: "#000",
  paleGray: "#f1f1f1",
  lightGray: "#a1a1a1",
  gray: "#787878",
  darkGray: "#121212",
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
    color: Color.darkGray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  body2: {
    fontSize: FontSize.size_smi,
    color: Color.lightGray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  background: {
    backgroundColor: Color.paleGray,
    flex: 1,
  },
  listItemRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listText: {
    fontSize: FontSize.size_xs,
    color: Color.darkGray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    marginTop: 5,
    marginBottom: 5,
  },
  listContainer: {
    margin: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  colorIcon: {
    color: Color.purple,
    fontSize: 25,
  },
  grayListIcon: {
    color: Color.gray,
    fontSize: 25,
    marginLeft: 10,
  },
  grayIcon: {
    color: Color.gray,
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
  },
});
