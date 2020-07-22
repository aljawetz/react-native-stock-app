const handlePost = () => {
  setSendingPost(true);

  Fire.shared
    .addPost({ text: text.trim(), localUri: image })
    .then(ref => {
      setText('');
      setImage(null);
      setSendingPost(false);
      navigation.goBack();
    })
    .catch(error => {
      alert(error);
    });
};