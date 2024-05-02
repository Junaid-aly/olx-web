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


export async function addItem(ad) {
  try {
    const { image } = ad; // Assuming images is an array of File objects

   
    const storageRef = ref(storage, `Todos/${image.name}`);
      await uploadBytes(storageRef, image);
      const imgUrl = await getDownloadURL(storageRef);
      return imgUrl
    
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
