
import { subscribeToHellfireClub } from './firebase/hellfire-club.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.valeu,
        email: txtEmail.value,
        level: txtLevel.value, 
        character: txtCharacter.value 
    }

    // Save in Database
    const subscriptionId =  await subscribeToHellfireClub(subscription)
    console.log('Inscrito com sucesso: ${subscriptionId}')

})    




