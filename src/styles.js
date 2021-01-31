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
