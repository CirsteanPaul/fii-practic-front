import styled from '../theme';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  gap: 50px;
  padding-left: 300px;
  @media (max-width: 1000px) {
    padding: 0px;
    width: 100%;
    gap: 10px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;
