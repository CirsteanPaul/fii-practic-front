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
  width: calc(100% - 265px);
  gap: 50px;
  padding-left: 100px;
  @media (max-width: 1000px) {
    padding: 0px;
    gap: 40px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;
