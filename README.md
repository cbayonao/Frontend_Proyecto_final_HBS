# Procesos Web

This is the repository to store the Scraplaw project Frontend. This application helps people manage their legal cases (Colombia) in an easy and practical way, in a single place, with their own user dashboard.  


The application has a robust AWS infrastructure that allows user registration and login. The web page is served from an S3 Bucket, and performs authenticated operations with AWS Cognito, to a propietary API in EC2 instances, and with a NoSQL DynamoDB.

Frontend code is built with ReactJS, Styled Components, Material UI, amazon-cognito-identity-js, react-router-dom, and react-swipeable-views

![enter image description here](https://i.ibb.co/6Bz8XXP/myimage.png)

## How to start it

```
# We will clone the repo locally and move inside
git clone https://github.com/cbayonao/Frontend_Proyecto_final_HBS.git && cd Frontend_Proyecto_final_HBS/frontend
# We install al dependencies with:
npm install
# Now you csan start a server local with:
npm start
# Builds the app for production to the  `build`  folder.  
The build is minified and the filenames include the hashes.  
npm run build
```

## Project Deployed

#### [ScraLaw](https://procesosweb.consulting)
Click Me!


## Project Back-end

#### [Back-end](https://github.com/jzamora5/ScraLaw_API)
Click Me!

## Authors

#### [Miguel Angel Parada](http://miguel-canon.me/) :bowtie:
#### [Camilo Bayona Orduz](https://www.bayona.me/) :yum:
#### [Jhoan Zamora Caicedo](http://me.jzamora.tech/)  :neckbeard:
