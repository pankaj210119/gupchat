import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";


// sign up function

const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export default signupUser;








