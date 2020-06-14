import { useState, useEffect } from 'react';

const api = 'http://scralawlb-689944875.us-east-1.elb.amazonaws.com/api/';

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
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + session.idToken.jwtToken, 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        cache: 'default',
    };
    return fetch(api + 'users/' + session.idToken.payload.sub, miInit)
        .then(response => response.ok ? response.json() : response)
        .catch(err => err);
}

export async function setRegister(sub, token, email) {
    console.log(sub);
    console.log(token);
    console.log(email);
    const miInit = {
        method: 'POST',
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ "e_mail": email }),
        mode: 'cors',
        cache: 'default'
    };
    return fetch(api + 'users/' + sub, miInit)
        .then(response => {
            return response;
        })
}

export async function updateUser(json, sub, token) {
    const miInit = {
        method: 'PUT',
        crossDomain: true,
        headers: {
            'X-MyApp-Authorization': "Bearer " + token, 'Content-Type': 'application/json'
        },
        body: JSON.stringify(json),
        mode: 'cors',
        cache: 'default'
    };
    return fetch(api + 'users/' + sub, miInit)
        .then(response => {
            return response;
        })
}

export async function searchProcess(process_id, sub, token) {
    const miInit = {
        method: 'POST',
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + token },
        mode: 'cors',
        cache: 'default'
    };
    $(".waiting").css("display", "flex");
    $(".home").css("z-index", "-1000");
    return fetch(api + 'processes/' + process_id + '/' + sub, miInit).then(function (response) {
        $(".waiting").css("display", "none");
        $(".home").css("z-index", "1");
        return (response);
    }).catch(function (error) {
        $(".waiting").css("display", "none");
        $("#modal-close").css("display", "flex");
        $(".home").css("z-index", "1");
        $("#modal-close p").text("La pagina gubernamental ha fallado, intentalo mas tarde");
        setTimeout(() => {
            $("#modal-close").css("display", "none");
        }, 5000);

        error;
    })
}

export async function getProcesses(session) {
    const miInit = {
        method: 'GET',
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + session.idToken.jwtToken },
        mode: 'cors',
        cache: 'default'
    };
    return fetch(api + 'processes/user/' + session.idToken.payload.sub, miInit)
        .then(response => ((response.ok) ? response.json() : (response)))
        .then(body => (body["processes"]));
}

export async function getProcess(process_id, session) {
    const miInit = {
        method: 'GET',
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + session.idToken.jwtToken },
        mode: 'cors',
        cache: 'default'
    };
    return fetch(api + 'processes/' + process_id + '/' + session.idToken.payload.sub, miInit)
        .then(response => ((response.ok) ? response.json() : (response)))
        .then(body => (body));
}

export async function deleteProcess(process_id, session) {
    const miInit = {
        method: 'DELETE',
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + session.idToken.jwtToken },
        mode: 'cors',
        cache: 'default'
    };
    return fetch(api + 'processes/' + process_id + '/' + session.idToken.payload.sub, miInit)
        .then(response => ((response.ok) ? response.json() : (response)))
        .then(body => body);
}
