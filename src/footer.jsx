import React from "react";
import styled from "styled-components";

// Styled components
const FooterContainer = styled.footer`
  background-color: #1f2937; /* bg-gray-800 */
  padding: 3rem 0; /* py-12 */
  color: #d1d5db; /* text-gray-300 */
`;

const FooterHeading = styled.h2`
  font-size: 0; /* sr-only */
`;

const FooterContent = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 sm:px-6 lg:px-8 */
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Logo = styled.img`
  height: 2.5rem; /* h-10 */
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width:100px;
`;

const SectionTitle = styled.h3`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #9ca3af; /* text-gray-400 */
  text-transform: uppercase;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const ListLink = styled.a`
  font-size: 1rem; /* text-base */
  color: #d1d5db; /* text-gray-300 */
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ffffff; /* hover:text-white */
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer aria-labelledby="footer-heading">
      <FooterHeading id="footer-heading">Footer</FooterHeading>
      <FooterContent>
        <GridContainer>
          {/* <Section>
            <Logo src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Company name" />
          </Section> */}
          <Section>
            <SectionTitle>Solutions</SectionTitle>
            <List>
              <ListItem><ListLink href="#">Marketing</ListLink></ListItem>
              <ListItem><ListLink href="#">Analytics</ListLink></ListItem>
              <ListItem><ListLink href="#">Commerce</ListLink></ListItem>
              <ListItem><ListLink href="#">Insights</ListLink></ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle>Support</SectionTitle>
            <List>
              <ListItem><ListLink href="#">Pricing</ListLink></ListItem>
              <ListItem><ListLink href="#">Documentation</ListLink></ListItem>
              <ListItem><ListLink href="#">Guides</ListLink></ListItem>
              <ListItem><ListLink href="#">API Status</ListLink></ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle>Company</SectionTitle>
            <List>
              <ListItem><ListLink href="#">About</ListLink></ListItem>
              <ListItem><ListLink href="#">Blog</ListLink></ListItem>
              <ListItem><ListLink href="#">Jobs</ListLink></ListItem>
              <ListItem><ListLink href="#">Press</ListLink></ListItem>
              <ListItem><ListLink href="#">Partners</ListLink></ListItem>
            </List>
          </Section>
          
        </GridContainer>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
