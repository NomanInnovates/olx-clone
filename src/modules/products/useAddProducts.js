import { useState } from "react";
import { db, storage } from "../../config/firebase";
function useAddProducts() {
  const [formData, SetformData] = useState({
    company: "",
    title: "",
    desc: "",
    price: "",
    location: "",
    category: "",
    url: "",
    time: new Date().toISOString(),
  });
  // use img
  const [image, setimage] = useState(null);
  const [url, seturl] = useState("");

  const fileSelectedHandler = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
    }
  };

  const fileUploadHandler = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(`images/${image.name}`)
          .getDownloadURL()
          .then((url) => {
            seturl(url);
            SetformData({ ...formData, url: url });
          });
      }
    );
  };
  // End use img

  const SubmitData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    SetformData(() => {
      if (name === "make") {
        return {
          ...formData,
          company: value,
        };
      } else if (name === "title") {
        return {
          ...formData,
          title: value,
        };
      } else if (name === "price") {
        return {
          ...formData,
          price: value,
        };
      } else if (name === "location") {
        return {
          ...formData,
          location: value,
        };
      } else if (name === "cate") {
        return {
          ...formData,
          category: value,
        };
      }
    });
  };
  const sendToFirebase = async () => {
    db.collection("products")
      .add(formData)
      .then((doc) => {
        console.log("Document written with ID: ", doc);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  const sendSubmitData = (e) => {
    e.preventDefault();
    sendToFirebase();
    seturl("");
    SetformData({
      company: "",
      title: "",
      desc: "",
      price: "",
      location: "",
      category: "",
    });
  };
  return [
    sendSubmitData,
    SubmitData,
    url,
    fileSelectedHandler,
    fileUploadHandler,
    formData,
    image,
  ];
}

export { useAddProducts };
