import styled from 'styled-components';

export interface BadgeProps {
  /**
   * Badge의 콘텐츠에 표시될 텍스트
   */
  text?: string | number;
}

export const Badge = ({ text }: BadgeProps) => {
  return <BadgeWrapper>{text}</BadgeWrapper>;
};

const BadgeWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.3);
`;
