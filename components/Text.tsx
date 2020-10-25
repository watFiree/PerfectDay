import styled from 'styled-components/native';

const Text = styled.Text<{ size: number }>`
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  text-align: center;
`;

export default Text;
