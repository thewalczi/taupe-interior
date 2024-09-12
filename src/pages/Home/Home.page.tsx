import styled from 'styled-components';
import background from './../../assets/sypialnia1_crop.jpg';
import background3 from './../../assets/sypialnia3.jpg';

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
    margin: 0 auto;
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'upper .' '. lower';
  `;

  const Text = styled.h1.attrs<{ $gridArea: string; $textAlign: 'left' | 'right' | 'center' }>((props) => ({
    $gridArea: props.$gridArea || 'auto',
    $textAlign: props.$textAlign || 'center',
  }))`
    color: white;
    font-size: 10rem;
    font-weight: 300;
    line-height: 90%;
    grid-area: ${(props) => props.$gridArea};
    margin: 0 auto;
    text-align: ${(props) => props.$textAlign};
    width: 100%;
  `;

  return (
    <Container>
      <Wrapper>
        <Text $gridArea="upper" $textAlign="right">
          projektowanie wnętrz
        </Text>
        <Text $gridArea="lower" $textAlign="left">
          homestaging
        </Text>
      </Wrapper>
    </Container>
  );
};
