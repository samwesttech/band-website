import styled from "styled-components";

export const Line = styled.hr`
    height: 0.5px;
    width: 80%;
    margin: 5% auto;
    background-color: white;
`;

export const SocialStyled = styled.div`
margin:auto;

a {
    margin:auto;
    padding: 2%;
    padding-top: 1%;
    padding-bottom:1%;
}
`;


export const NavStyled = styled.div`
display:flex;
height:100%;

.nav-logo{
    width:20%;
    height:auto;
    margin: auto;
}

.nav-center{
    display:flex;
    justify-content:center;
    width:100%;
    height:100%;
    margin: auto;
    ;

    .nav-link{
        margin:auto;      
    }

}
`;

export const AboutStyled = styled.div`
margin:auto;
margin-bottom:5%;
width:65%;
`;

export const TableStyled = styled.table`
border: solid white 0.5px;

th, td {
    border:solid white 0.5px;
}
`;

export const Button = styled.button`
    padding: 0.75%;
    margin: 0;
    width: 40%;
    height: auto;
    font-size: 1.75vw;
    border-radius: 0;
    color: white;
    background-color: black;
    transition-timing-function:ease-in-out;
    transition:0.3s;

    :hover {
        color:black;
        background-color:white;
        
    }
`;

export const ImageGrow = styled.img`
width: auto;
margin: 10% auto;
transition-timing-function:ease-in-out;
transition:1s;

:hover {
    transform:scale(2)
}
`;
