import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const Container = styled.div `
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
`;
const Title = styled.h1 `
  text-align: center;
  font-size: 2rem;
  margin-bottom: 16px;
`;
const Content = styled.div `
  font-size: 1rem;
  line-height: 1.6;
`;
const FooterContainer = styled.div `
  margin-top: 32px;
  text-align: center;
  font-size: 0.875rem;
  color: #888;
`;
const Page = ({ title, content, BeforeContent, AfterContent, Footer, }) => {
    return (_jsxs(Container, { children: [_jsx(Title, { children: title }), BeforeContent, _jsx(Content, { dangerouslySetInnerHTML: { __html: content } }), AfterContent, Footer && _jsx(FooterContainer, { children: Footer })] }));
};
export default Page;
