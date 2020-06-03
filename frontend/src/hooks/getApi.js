import { useState, useEffect } from 'react';
const api = 'http://scrawlawapiv1-env.eba-jpcs83r5.us-east-1.elasticbeanstalk.com/api/status';

const useGetData = () => {
    const [mydata, setData] = useState ([]);
    useEffect(() => {
    fetch(api)
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return mydata;

}
export default useGetData;
