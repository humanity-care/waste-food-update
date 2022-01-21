

import firebase from 'firebase/compat/app';
// import "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyBgf7LSUbjLDlQcGPEj_6qpqyE6jULGz1o",
  authDomain: "care-humanity-fce50.firebaseapp.com",
  projectId: "care-humanity-fce50",
  storageBucket: "care-humanity-fce50.appspot.com",
  messagingSenderId: "202028986798",
  appId: "1:202028986798:web:78433767285b2035f5983f"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()

const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    // console.log(err.message);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    toast.success("Log in successfully")

  } catch (err) {
    // console.log(err.message);
    if (err.message === "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).")
      toast.error("Password is incorrect")

  }
};

const registerWithEmailAndPassword = async (name, email, phone, userType, password, registered) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      email,
      phone,
      userType,
      password,
      registered

    });
    toast.success("Your account has been created successfully")
  } catch (err) {
    console.log(err.message);
    // toast.warn(err.message)

    if (err.message === "Firebase: The email address is already in use by another account. (auth/email-already-in-use).") {
      toast.warn("The email address is already in use by another account.")
    }
    else if (err.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
      toast.warn("Password should be at least 6 characters.")

    }

    // alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    toast.success("Password reset link is sent on your email address")
    // alert("Password reset link sent!");
  } catch (err) {
    // console.log(err.message);
    toast.warn(err.message)
    // alert(err.message);
  }
};
const donateAfood = async (donateName, donateEmail, donatePhone, foodType, donateWeight, donationType, registered) => {
  try {
    // const res = await auth.createUserWithEmailAndPassword(email, password);
    // const user = res.user;
    await db.collection("donateAfood").add({
      // uid: user.uid,
      donateName, donateEmail, donatePhone, foodType, donateWeight, donationType, registered

    });
    toast.success("Your record has been submitted successfully")
  } catch (err) {
    // console.log(err.message);

    toast.warn(err.message)
    // alert(err.message);


  }
};

const sponsorAfamily = async (sponsorName, sponsorEmail, sponsorPhone, sponsorType, sponsorAmount, doantionBased, registered) => {
  try {
    // const res = await auth.createUserWithEmailAndPassword(email, password);
    // const user = res.user;
    await db.collection("sponsorAfamily").add({
      // uid: user.uid,
      sponsorName, sponsorEmail, sponsorPhone, sponsorType, sponsorAmount, doantionBased, registered

    });
    toast.success("Your record has been submitted successfully")
  } catch (err) {
    // console.log(err.message);

    toast.warn(err.message)
    // alert(err.message);


  }
};

// Non register donor
const NonRegisterDonor = async (name, email, phone, payment, amount, donationType, userType, registered) => {
  try {
    // const res = await auth.createUserWithEmailAndPassword(email, password);
    // const user = res.user;
    await db.collection("users").add({
      // uid: user.uid,
      name, email, phone, payment, amount, donationType, userType, registered

    });
    toast.success("Your record has been submitted successfully")
  } catch (err) {
    // console.log(err.message);

    toast.warn(err.message)
    // alert(err.message);


  }
};

const RegisterDonor = async (email, name, payment, amount, donationType) => {
  try {
    // const res = await auth.createUserWithEmailAndPassword(email, password);
    // const user = res.user;
    await db.collection("donor").add({
      // uid: user.uid,
      email, name, payment, amount, donationType

    });
    toast.success("Your record has been submitted successfully")
  } catch (err) {
    // console.log(err.message);

    toast.warn(err.message)
    // alert(err.message);
  }
};

const RegistredSeeker = async (seekerName, seekerEmail, seekerPhone, seekerMessage) => {
  try {
    // const res = await auth.createUserWithEmailAndPassword(email, password);
    // const user = res.user;
    await db.collection("seeker").add({
      // uid: user.uid,
      seekerName, seekerEmail, seekerPhone, seekerMessage

    });
    toast.success("Your record has been submitted successfully")
  } catch (err) {
    // console.log(err.message);

    toast.warn(err.message)
    // alert(err.message);
  }
};







export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  NonRegisterDonor,
  RegisterDonor,
  RegistredSeeker,
  donateAfood,
  sponsorAfamily
};

