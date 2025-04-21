import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 16px;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

const FooterContainer = styled.div`
  margin-top: 32px;
  text-align: center;
  font-size: 0.875rem;
  color: #888;
`;

type PageProps = {
  title: string;
  content: string;
  BeforeContent?: ReactNode;
  AfterContent?: ReactNode;
  Footer?: ReactNode;
};

const Page = ({
  title,
  content,
  BeforeContent,
  AfterContent,
  Footer,
}: PageProps): ReactElement => {
  return (
    <Container>
      <Title>{title}</Title>
      {BeforeContent}
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      {AfterContent}
      {Footer && <FooterContainer>{Footer}</FooterContainer>}
    </Container>
  );
};

export default Page;
