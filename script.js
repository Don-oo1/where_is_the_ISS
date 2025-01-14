const issId = 25544 // id of ISS
const API = `https://api.wheretheiss.at/v1/satellites/${issId}` // API forget info of ISS from 'where the ISS at?'


setInterval(setLatLon, 1000)

async function getData(){

    const response  = await fetch(API)
    const data = response.json()
    
    return data
} 

async function setLatLon(){
   
    const data = await getData()

    
    document.querySelector("#latitude").textContent = data.latitude
    document.querySelector("#longitude").textContent = data.longitude


}



