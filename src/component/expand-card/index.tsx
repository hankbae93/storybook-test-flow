import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout, motion } from 'framer-motion';


const Content = ({text}: {text?: ReactNode}) => {
  return <CardText layoutId={`card-text`}>{text}</CardText>
}


const ExpandCard = ({text}: {text?: ReactNode}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <Card onClick={() => setIsExpanded(prev => !prev)}>
  <AnimateSharedLayout>
    {
      isExpanded
      ? (<ExpandCardContent layoutId="expandable-card" initial={{borderRadius: '16px', border: '1px solid #ccc'}} exit={{borderRadius: '16px', border: '1px solid #ccc'}}>
          <Content text={text}/>
        </ExpandCardContent>)
        :( <CardContent layoutId="expandable-card" initial={{borderRadius: '16px', border: '1px solid #ccc'}} exit={{borderRadius: '16px', border: '1px solid #ccc'}}>
          <Content text={text}/>
          </CardContent>)
    }
  </AnimateSharedLayout>
  </Card>

}


const ExpandCardList = () => {
  const [id, setId] = useState<number | null>(null);

  return (
    <CardWrapper>
      <AnimateSharedLayout>
      {Array(4)
        .fill(null)
        .map((_, index) => {
          return <ExpandCard text={index} />
        })
        }
      </AnimateSharedLayout>
    </CardWrapper>
  );
};

export default ExpandCardList;

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 800px;
  margin: 0 auto;
  height: 200px;
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  background: #fff;
  
  
 
`;
const CardText = styled(motion.p)`
  
`

const ExpandCardContent = styled(motion.div)<{active?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
`

const CardContent = styled(motion.div)<{active?: boolean}>`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
`

const CardInfo = styled(motion.div)`

`