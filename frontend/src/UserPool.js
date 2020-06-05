import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-2_B6iWRQ83v',
    ClientId: '7c6oic7nsjeijr1ck9dsgdak65'
};

export default new CognitoUserPool(poolData);