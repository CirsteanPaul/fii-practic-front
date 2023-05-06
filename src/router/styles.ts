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
  width: calc(100% - 270px);
  gap: 110px;
  padding-left: 100px;
`;
