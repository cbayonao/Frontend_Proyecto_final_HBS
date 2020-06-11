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
        cache: 'default'
    };
    return fetch(api + 'users/' + session.idToken.payload.sub, miInit)
        .then(response => response)
        .then(data => (data));
}


export async function setRegister(json, sub, token) {
    const miInit = {
        method: 'POST',
        crossDomain: true,
        headers: { 'X-MyApp-Authorization': "Bearer " + token, 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(json),
        mode: 'cors',
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
        $(".home").css("z-index", "1");
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