import app from './firebase/app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'

export function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app)
    const hellfireClubCollection =  collection(db, 'hellfire-clube')
    addDoc(hellfireClubCollection, subscription)

}