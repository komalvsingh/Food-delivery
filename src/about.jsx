import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 6rem 0; /* py-24 sm:py-32 */
  width: 100%;
  margin-top: 20px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // mix-blend-mode: multiply;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), 
    url("https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=");

  
`;

const Gradient = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: block;
    position: absolute;
    top: -2.5rem;
    right: 50%;
    z-index: -10;
    transform: translate(50%, 0);
    aspect-ratio: 1097 / 845;
    width: 68.5625rem;
    background: linear-gradient(to top right, #ff4694, #776fff);
    opacity: 0.2;
    clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
  }
`;

const MainContent = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1.5rem; /* px-6 lg:px-8 */
`;

const HeadingContainer = styled.div`
  max-width: 40rem; /* max-w-2xl lg:mx-0 */
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.25rem; /* text-4xl sm:text-6xl */
  font-weight: bold;
  text-align: center;
  color: white;
  @media (min-width: 640px) {
    font-size: 3.75rem;
  }
`;

const Description = styled.p`
  margin-top: 1.5rem; /* mt-6 */
  text-align: center;
  font-size: 1.125rem; /* text-lg leading-8 */
  color: #d1d5db; /* text-gray-300 */
`;

const LinksContainer = styled.div`
  max-width: 40rem; /* max-w-2xl lg:mx-0 lg:max-w-none */
  margin: 2.5rem auto 0; /* mt-10 */
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* gap-x-8 gap-y-6 */
  text-align: center;
  font-size: 1.125rem; /* text-base font-semibold leading-7 */
  font-weight: bold;
  color: white;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 2.5rem; /* lg:gap-x-10 */
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const StatsGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* gap-8 */
  margin-top: 4rem; /* mt-16 */
  text-align: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5rem; /* sm:mt-20 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const StatLabel = styled.dt`
  font-size: 1rem; /* text-base leading-7 */
  color: #d1d5db; /* text-gray-300 */
`;

const StatValue = styled.dd`
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

function About() {
  return (
    <AboutContainer id="about">
      <BackgroundImage />
      <Gradient />
      <Gradient style={{ top: "-13rem", left: "50%", transform: "translate(-50%, 0)" }} />
      <MainContent>
        <HeadingContainer>
          <Heading>About us</Heading>
          <Description>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </Description>
        </HeadingContainer>
        {/* <LinksContainer>
          <LinkGrid>
            <StyledLink href="#">Open roles <span aria-hidden="true">→</span></StyledLink>
            <StyledLink href="#">Internship program <span aria-hidden="true">→</span></StyledLink>
            <StyledLink href="#">Our values <span aria-hidden="true">→</span></StyledLink>
            <StyledLink href="#">Meet our leadership <span aria-hidden="true">→</span></StyledLink>
          </LinkGrid>
        </LinksContainer> */}
        <StatsGrid>
          <StatItem>
            <StatLabel>Offices worldwide</StatLabel>
            <StatValue>12</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Full-time colleagues</StatLabel>
            <StatValue>300+</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Hours per week</StatLabel>
            <StatValue>40</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Paid time off</StatLabel>
            <StatValue>Unlimited</StatValue>
          </StatItem>
        </StatsGrid>
      </MainContent>
    </AboutContainer>
  );
}

export default About;
