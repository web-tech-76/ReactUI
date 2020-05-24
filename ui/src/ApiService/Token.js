
let token ="";

export function storeToken(token)
{
    window.localStorage.setItem("token", token);
}


export function getToken()
{
    token = window.localStorage.getItem("token");
    return token;
}


export function authHeader(){

    token = getToken();

    return {
        Authorization: `Bearer ${token}`
        
        };

}
