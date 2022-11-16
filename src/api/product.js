import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export const getProducts = async () => {
    const list = []
    const querySnapshot = await getDocs(collection(db, "list"));
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      list.push({ id: doc.id, product: data.product })
    });
    return await list
  }

export const addProduct = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "list"), {
        product: product,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return
  }

export const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "list", id));
      console.log("Document successfully deleted!");
    } catch (e) {
      console.error("Error removing document: ", e);
    }
    return
  }