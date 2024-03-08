import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCD4l-gPr9sha03I4eS9x2URJ7d8FZd02M",
  authDomain: "sign-signup-769b4.firebaseapp.com",
  projectId: "sign-signup-769b4",
  storageBucket: "sign-signup-769b4.appspot.com",
  messagingSenderId: "565104326597",
  appId: "1:565104326597:web:09e45de8c9752506913dac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export async function register(userinfo) {
  try {
    const { email, password, age, fullname } = userinfo;
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      fullname,
      age,
      email,
    });
    alert("Successfully Register");
  } catch (e) {
    alert(e.message);
  }
}

export async function login(userinfo, navigate) {
  try {
    const { email, password } = userinfo;
    await signInWithEmailAndPassword(auth, email, password);
    alert("Successfully logged");
    navigate("/");
  } catch (e) {
    alert(e.message);
  }
}
// export async function additem(ad) {
//   try {
//     const { title, description, price, image } = ad;
//     const imageArray = Array.from(image[0]);
//     const arr = [];
//     for (let i = 0; i < imageArray.length; i++) {
//       const image = imageArray[i];
//       const storageRef = ref(storage, `Todos/${image.name}`);
//       await uploadBytes(storageRef, image);
//       const url = await getDownloadURL(storageRef);
//       arr.push(url);
//     }
//     await addDoc(collection(db, "Todos"), {
//       title,
//       description,
//       price,
//       imageUrl: arr,
//     });
//     alert("Ad Post Successfully");
//   } catch (e) {
//     alert(e.message);
//   }
// }

export async function addItem(ad) {
  try {
    const { title, description, price, images } = ad; // Assuming images is an array of File objects
    const imageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageName = `${Date.now()}-${image.name}`; // Using timestamp to make image names unique
      const storageRef = ref(storage, `Todos/${imageName}`);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      imageUrls.push(url);
    }

    await addDoc(collection(db, "Todos"), {
      title,
      description,
      price,
      imageUrls, // Storing an array of image URLs
    });
    alert("Ad Posted Successfully");
  } catch (e) {
    alert(e.message);
  }
}

export async function getAds() {
  const ads = [];
  const querySnapshot = await getDocs(collection(db, "Todos"));
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id;
    ads.push(ad);
  });
  return ads;
}

export async function UserData() {
  const UserID = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    const Userd = doc.data();
    Userd.id = doc.id;
    UserID.push(Userd);
  });
  return UserID;
}

export async function UpDateImg(e, image) {
  console.log("e", e);
  // console.log("imagename" ,image)

  const userd = e[0];
  try {
    const storageRef = ref(storage, `Profile image/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    await addDoc(collection(db, "users"), {
      fullname: userd.fullname,
      email: userd.email,
      age: userd.age,
      img: url,
    });
    const ver = await deleteDoc(doc(db, "users", userd.id));
    console.log("var data", ver);
    alert("Ad Post Successfully");
  } catch (e) {
    alert(e.message);
  }
}
