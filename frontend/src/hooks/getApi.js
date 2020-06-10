import { useState, useEffect } from 'react';

const api = 'http://scrawlawapiv1-env.eba-jpcs83r5.us-east-1.elasticbeanstalk.com/api/';

export const useGetData = () => {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        fetch(api + 'status')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
    return mydata;
}

export async function getUser(session) {
    const miInit = {
        method: 'GET',
        headers: { 'X-MyApp-Authorization': "Bearer " + session.idToken.jwtToken },
        cache: 'default'
    };
    return fetch(api + 'users/' + session.idToken.payload.sub, miInit)
        .then(response => response)
        .then(data => (data));
}


export async function setRegister(json, sub, token) {
    const miInit = {
        method: 'POST',
        headers: { 'X-MyApp-Authorization': "Bearer " + token, 'Content-Type': 'application/json' },
        body: JSON.stringify(json),
        cache: 'default'
    };
    return fetch(api + 'users/' + sub, miInit)
        .then(response => {
            if (response.ok) window.location.href = "#/home";
            return false;
        })
}

export async function searchProcess(process_id, sub, token) {
    const miInit = {
        method: 'POST',
        headers: { 'X-MyApp-Authorization': "Bearer " + token },
        cache: 'default'
    };
    $(".home").css("z-index", "-1000");
    setTimeout(async () => {
        return await fetch(api + 'processes/' + process_id + "/" + sub, miInit)
            .then(response => {
                if (response.ok) {
                    window.location.href = "#/home";
                }
                return false;
            })
    });

}