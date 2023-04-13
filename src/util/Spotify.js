const clientId = '1e581bf8a9f5493a8b4fed3a1fba9de2';
const redirectUri = 'http://localhost:3000/';

let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/); 
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            // 
            // why we have to put [1] at the end of variables below
            // 
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            
            //code below clears the parameters, allowing to grab new access token when it expires 
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
        
    }
    

};

export default Spotify;
