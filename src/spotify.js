//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/" 
const clientId = "f1660ab9910f4cfeb6621f213c64d3de"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl =()=>{
    return window.location.hash.substring(1).split('&').reduce((intital,item)=>{
        let parts = item.split('=');
        intital[parts[0]]=decodeURIComponent(parts[1]);
        return intital;
    },{});
} 

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
