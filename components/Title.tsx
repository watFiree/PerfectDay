import styled from 'styled-components/native';

const Title = styled.Text<{ size?: number }>`
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  font-weight: 500;
`;

export default Title;
