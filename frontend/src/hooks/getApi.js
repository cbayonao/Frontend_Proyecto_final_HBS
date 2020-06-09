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
