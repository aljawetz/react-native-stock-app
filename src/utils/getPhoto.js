import getPermission from "./getPermission";
import * as Permissions from "expo-permissions";
//import * as ImagePicker from "expo-image-picker";

export const selectPhoto = async () => {
  const status = await getPermission(Permissions.CAMERA_ROLL);

  if (status) {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      return result.uri;
    }
  }
};

export const takePhoto = async () => {
  const status = await getPermission(Permissions.CAMERA);
  if (status) {
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true });
    if (!result.cancelled) {
      return result.uri;
    }
  }
};