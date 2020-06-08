import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_sgeT5tm5u',
    ClientId: '3rj5a30prom7dudokc1b5dog4l'
};

export default new CognitoUserPool(poolData);