const issId = 25544 // id of ISS
const API = `https://api.wheretheiss.at/v1/satellites/${issId}` // API forget info of ISS from 'where the ISS at?'

let first = true
let marker
let myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [38, 95],
    iconAnchor: [20, 50]
});
 setInterval(setLatLon, 1000)

async function getData(){
    const response  = await fetch(API)
    const data = response.json()
    return data
} 

async function setLatLon(){
   
    const data = await getData()

    const latLong = [data.latitude, data.latitude]
    document.querySelector("#latitude").textContent = data.latitude
    document.querySelector("#longitude").textContent = data.longitude
    
    if(first){
        let map = L.map('map').setView(latLong, 9);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        marker = L.marker([51., -0.09],{icon: myIcon}).addTo(map);
        first = false
        
    }else{
        marker.setLatLng(latLong)
    }

    

     
}





