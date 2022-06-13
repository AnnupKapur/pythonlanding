import {
  addDoc, 
  getFirestore,
  collection
} from 'firebase/firestore';

export const sendMessage = async (
	name: string,
	phone: string,
	email: string,
	comments: string,
  setnstrMsgID: (
    id: string
  )=>void,
  setbMsgError: (
    error: boolean
  )=>void,
  ) => {
	try {const objDocMeta = await addDoc(collection(getFirestore(), 'contact'), {
    Name: name,
    Phone: phone,
    Email: email,
    Comments: comments,
    DateTime: Date.now(),
  });
  setnstrMsgID(objDocMeta.id);
	}
	catch(error) {
    setbMsgError(true);
	}
 }