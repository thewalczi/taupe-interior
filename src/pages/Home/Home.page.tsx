import styled from 'styled-components';
import background from './../../assets/sypialnia1_crop.jpg';
import background3 from './../../assets/sypialnia3.jpg';
import { mediaQuery } from '../../helpers/breakpoints';

export const HomePage = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #e7d4b5;
    background-image: url(${background});
    background-image: url(${background3});
    background-size: cover;
    background-position: center 53%;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(160, 147, 125, 0.6);
      background-color: rgba(0, 0, 0, 0.4);
    }
  `;

  const Wrapper = styled.div`
    max-width: 144rem;
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 1.6rem;
    margin-top: calc(var(--headerLogoSize) + var(--headerPaddingVertical));

    ${mediaQuery.sm`
      gap: 0;
    `}

    ${mediaQuery.lg`
      display: grid;
      grid-template-areas: 'upper .' '. lower';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      `}
  `;

  const Text = styled.h1`
    color: white;
    font-size: 5.4rem;
    font-weight: 300;
    line-height: 90%;
    margin: 0;
    text-align: left;

    ${mediaQuery.sm`
      font-size: 6.8rem;
      
      &.left {
        text-align: right;
        align-self: start;
      }
      &.right {
        text-align: left;
        align-self: end;
      }
    `}

    ${mediaQuery.md`
      font-size: 7.2rem;
      `}
      
    ${mediaQuery.lg`
      &.left {
        grid-area: upper;
        text-align: right;
        align-self: end;
        }
      &.right {
        grid-area: lower;
        text-align: left;
        align-self: start;
      }  
    `}
          
    ${mediaQuery.xl`
      font-size: 8rem;
    `}
  `;

  return (
    <Container>
      <Wrapper>
        <Text className="left">
          projektowanie
          <br />
          wnętrz
        </Text>
        <Text className="right">homestaging</Text>
      </Wrapper>
    </Container>
  );
};
