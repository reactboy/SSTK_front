import React from "react";
import styled from "styled-components";
import { map } from "lodash";

const FormBox = props => {
    const { inputs, buttons, name } = props;
    return (
        <StyledForm>
            <StyledFormName>{name}</StyledFormName>
            <StyledFromInputWrapper>
                {map(inputs, input => (
                    <StyledFromInput>{input}</StyledFromInput>
                ))}
            </StyledFromInputWrapper>
            <StyledFormButtonWrapper>
                {map(buttons, button => (
                    <StyledFormButton>{button}</StyledFormButton>
                ))}
            </StyledFormButtonWrapper>
        </StyledForm>
    );
};

const StyledForm = styled.div`
    && {
        background: #ffffff;
        padding: 4rem 6rem;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2),
            0 0.6rem 0.6rem rgba(0, 0, 0, 0.24);
        max-width: 38rem;
    }
`;
const StyledFormName = styled.p`
    && {
        text-align: center;
        font-size: 3.2rem;
        font-weight: 100;
    }
`;

const StyledFromInputWrapper = styled.div`
    && {
        margin-top: 6rem;
    }
`;

const StyledFromInput = styled.div`
    && {
        margin-top: 4rem;
    }
`;

const StyledFormButtonWrapper = styled.div`
    && {
        margin-top: 6rem;
        text-align: center;
    }
`;

const StyledFormButton = styled.div`
    && {
        display: inline-block;
    }
`;

export default FormBox;