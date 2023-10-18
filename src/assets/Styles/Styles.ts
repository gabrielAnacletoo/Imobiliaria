import styled from 'styled-components'

export const ContainerTemplate = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
export const DivSwiper = styled.div`
width: 98%;
height: 500px;
overflow: hidden;
`

export const NavHeader = styled.div`
display:flex;
align-items: center;
flex-direction: row;
height: 20%;
width: 100%;
justify-content: space-between;
ul {
    display: flex;
    width:50%;
    list-style: none;
    justify-content: space-between;
    color: dimgray;
}
ul li{
    cursor: pointer;
    height: 100%;
    padding: 2.5% 2%;
    border-radius: 5px;
}
ul li:hover{
    background-color:#F9F9F9;
}
img {
    width: 10%;
}
`

export const UserDivHeader =  styled.div`
width: 15%;
display: flex;
align-items:center;
justify-content: space-around;
a {
font-weight: bold;
font-size: 13px;
text-decoration: none;
color: dimgray;
}
a:hover {
 color:#000;
}
`
export const LabelDiv = styled.div`
position: absolute;
top: -2.5em;
left: 0;
padding: 1%;
z-index: -1;
background: #FFF;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

p{
color: dimgray;
font-weight:bold;
}
`

export const Details = styled.div`
display: flex;
flex-direction: column;
margin: 4% 0;
padding: 1%;
width: 85%;
background-color: #fff;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
align-items: flex-start;
border-radius: 5px;
position: relative;

`
export const DetailsInputs = styled.div`
display: flex;
width: 75%;
font-size: 12px;
padding: 1%;
flex-direction: row;
align-items: center;
justify-content: space-between;
p {
font-size: 13px;
}
input {
border-radius: 4px;
border: 1px solid dimgray;
padding: 1px 2px;    
}
select {
color: dimgray;
border-radius:4px;
font-size: 14px;
font-weight: bold;
padding: 0.5% 0.5%;
}
.InputRange{
font-size: 13px;
overflow: hidden;
}
`

export const DetailsCheckBox = styled.div`
display: flex;
align-items:center;
justify-content: space-around;
width: 75%;
span {
    font-size: 11px;
}
`

export const DivBtn = styled.div`
display: flex;
margin-top: 2%;
align-items: flex-end;
justify-content: flex-end;
width: 100%;
button {
background-color: #b51010;
border: none;
color: #fff;
padding: 1% 5%;
font-weight:bold;
font-size:12px;
}
`

export const DivInputRange = styled.div`
width: 40%;
`
export const InputEndereço = styled.div`
input {
padding:1.5% 2%;
}
`

export const HighlightTitle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;
.linhaVermelha {
  margin-top:1%;
  width: 10%;
  height: 5px;
  background-color: red;
}
`

export const HighlightContent = styled.div`
width: 100%;
margin-top: 2%;
display: flex;
align-items: center;
justify-content: center;
padding: 3%;
`
export const DivApartamentos = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border-radius: 5px;
width: 90%;
height: 100%;
background-color: #fff;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.3);
span {
    margin:5% 0;
    font-size:13px;
}
.SliderHighLights{
border-top-right-radius: 5px;
border-top-left-radius: 5px;
width: 100%;
height: 230px;

}
`
export const InfoHighlights = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-around;
width: 90%;
margin-top: 2%;
span {
    font-size: 13px;
}
.valor {
color: red;
font-weight:bold;
font-size:13px;
}
` 

export const WarningFooter = styled.div`
display:flex;
width: 100%;
justify-content:center;
align-items: center;
background-color:#fff;
p{
font-size:12px;
}
`

export const MiddleContent = styled.div`
display: flex;
width: 100%;
flex-direction: column;
background-color: #b51010;
align-items: flex-start;
justify-content: center;
color: #fff;
text-align: start;
padding: 7%;
`

export const EndFooter = styled.div`
background-color: #292626;
width: 100%;
display: flex;
flex-direction: row;
padding:1%;
justify-content: space-evenly;
`

export const EndContent = styled.div`
display: flex;
width: calc(23.33% - 10px); 
font-size:12px;
flex-direction:column;
align-items: flex-start;
justify-content: center;
color: #8c8787;
.logo{
    width: 30%;
}
button {
background-color: #b51010;
border: none;
color: #fff;
padding: 5% 3%;
margin-top:5%;
font-weight:bold;
font-size:1.2em;
border-radius:3px;
}
`

export const BadgeRegister = styled.div`
background-color: #c4c4c4;
display:flex;
justify-content: flex-start;
align-items: center;
height: 150px;

p{
margin-left:6%;
color: #fff;   
font-size:1.1em;
font-weight:500;
}
`
export const FormRegister = styled.div`
width: 100%;
display:flex;
margin-top: 3%;
padding-left: 5%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

`

export const FormDiv = styled.div`
display:flex;
width: 40%;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
margin: 1% 1%;
p{
display: flex;
align-items:center;
width: 100%;
height: 100px;
background-color: #f0f0f0;
margin-bottom: 2%;
padding:0 2%;
font-size: 1.1em;
}
input {
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding: 2% 0 2% 1%;
width: 100%;
margin-left: 0.5%;
margin-bottom: 1%;
}
button {
background-color: #f0f0f0;
border: none;
cursor: pointer;
color: #000;
padding: 3% 5%;
margin: 2% 0.5%;
font-weight:600;
font-size:0.9em;
}
`

