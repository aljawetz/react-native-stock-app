import { Platform, StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const headerHeight = 80;
export const searchbarHeight = 45;

export const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const colors = {
  header: 'white',

  main: "#5ea23a",
  text: "#696969",
  title: "#464646",
  inputTitle: "#8A8F9E",
  subtitle: "#545454",
  categoryTitle: "#161616",
  tint: "#ff5a66",
  description: "#bbbbbb",
  filterTitle: "#8a8a8a",
  starRating: "#2bdf85",
  location: "#a9a9a9",
  white: "white",
  facebook: "#4267b2",
  grey: "grey",
  greenBlue: "#00aea8",
  placeholder: "#a0a0a0",
  //background: "#070061",
  background: "#D3D3D3",
  button: '#007AFF',
  blue: "#3293fe",
  orange: "#F97878",
  pink: "#EA3372"
};

export const Styles = {

  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans"
  },
  borderRadius: {
    main: 25,
    small: 5
  },
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "black",
    marginVertical: 20,
  }
};