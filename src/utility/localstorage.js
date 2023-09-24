function getSavedPhones(){
    const getPhone = localStorage.getItem('phones');
    if(getPhone){
        return JSON.parse(getPhone)
    }
    return []
}

function savePhones(phone){
    const phonesContainer = getSavedPhones();
    const exist = phonesContainer.find(ph=> ph.id === phone.id)
    if(!exist){
        phonesContainer.push(phone)
        localStorage.setItem('phones', JSON.stringify(phonesContainer))
    }
}


export { getSavedPhones, savePhones };
