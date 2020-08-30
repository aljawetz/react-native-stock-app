import firebase from 'firebase';

function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
        firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        return true;
      }
    }
  }
  return false;
};

function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  var unsubscribe = firebase.auth().onAuthStateChanged(
    function (firebaseUser) {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
          .then(function (result) {
            console.log('user signed in ');
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref('/users/' + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  created_at: Date.now()
                })
                .then(function (snapshot) {
                });
            } else {
              firebase
                .database()
                .ref('/users/' + result.user.uid)
                .update({
                  last_logged_in: Date.now()
                });
            }
          })
          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
};

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      iosClientId: '689926227838-d5691shsskrud596hspa6dq1ialv96oe.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default signInWithGoogleAsync;