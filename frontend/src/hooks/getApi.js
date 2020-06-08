import { useState, useEffect } from 'react';
import UserPool from "../UserPool";

const api = 'http://scrawlawapiv1-env.eba-jpcs83r5.us-east-1.elasticbeanstalk.com/api/';

export const useGetData = () => {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        fetch(api + 'status')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
    getUser();
    return mydata;
}

export const getUser = () => {
    const [mydata, setData] = useState([]);
    const sub = UserPool.getCurrentUser().getUsername();
    const token = UserPool.getCurrentUser().storage[
        "CognitoIdentityServiceProvider.3rj5a30prom7dudokc1b5dog4l.b8adaf62-43ef-4df9-857b-1ee078e9a02c.idToken"
    ];
    const miInit = {
        method: 'GET',
        headers: { 'X-MyApp-Authorization': "Bearer " + token },
        cache: 'default'
    };
    useEffect(() => {
        fetch(api + 'users/' + sub, miInit)
            .then(response => response)
            .then(data => setData(data));
    }, []);
    return mydata;
}
