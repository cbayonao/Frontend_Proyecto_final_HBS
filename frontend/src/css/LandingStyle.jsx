import { createGlobalStyle } from "styled-components";

export const LandingStyle = createGlobalStyle`
.slider {
  color: black;
  width: 95%;
  margin: auto;
  overflow: hidden;
}
.slider > ul {
  display: flex;
  padding: 0;
  width: 300%;
  animation: cambio 15s infinite alternate;
  animation-timing-function: ease-out;
}
.slider li {
  width: 100%;
  list-style: none;
}
.text,
.img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 730px) {
  .slider > ul > li > div {
    flex-flow: column-reverse wrap;
  }
}
.slider > ul > li > div {
  width: 100%;
  display: flex;
  flex-flow: column no-wrap;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(19, 118, 135, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(47%, rgba(246, 246, 246, 1)),
    color-stop(100%, rgba(19, 118, 135, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(19, 118, 135, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(19, 118, 135, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(19, 118, 135, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(19, 118, 135, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#137687', GradientType=1 );
}
.text li:nth-child(1) {
  content: "\f0e1";
  color: rgb(14, 118, 168);
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
}
.text li:nth-child(2) {
  content: "\f0e1";
  color: rgb(14, 118, 168);
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
}
.text li:nth-child(3) {
  content: "\f0e1";
  color: rgb(14, 118, 168);
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
}
@keyframes cambio {
  0% {
    margin-left: 0;
  }
  30% {
    margin-left: 0;
  }
  35% {
    margin-left: -100%;
  }
  70% {
    margin-left: -100%;
  }
  75% {
    margin-left: -200%;
  }
  100% {
    margin-left: -200%;
  }
}

.img img{
  border-radius: 100%;
  width: 200px;
}

`;
