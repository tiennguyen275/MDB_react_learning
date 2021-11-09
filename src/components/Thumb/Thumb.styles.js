import styled from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;
    border-radius: 20px;
`;

export const Image = styled.img`
    width:100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover; // center image fit in Thumb
    animation: animateThumb 0.5s;

    :hover{
        transform: scale(1.2);
    }

    @keyframes animateThumb{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;