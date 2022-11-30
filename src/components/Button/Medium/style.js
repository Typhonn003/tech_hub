import styled from "styled-components";

const StyledMediumButton = styled.button`
    height: 32px;
`

export const StyledCommonButton = styled(StyledMediumButton)`
    background-color: var(--color-grey3);

    :hover {
        background-color: var(--color-grey2);
    }
`