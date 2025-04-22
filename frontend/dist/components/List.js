import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
const StyledList = styled.div `
  border-top: 2px solid
    ${(props) => (props.$borderless ? "transparent" : "#ccc")};
`;
const NoItemsMessage = styled.div `
  padding-top: 25px;
  text-align: center;
`;
class List extends React.PureComponent {
    render() {
        const { items, renderItem, noItemsMessage, borderless = false, } = this.props;
        if (items.length === 0) {
            return _jsx(NoItemsMessage, { children: noItemsMessage });
        }
        return (_jsx(StyledList, { "$borderless": borderless, children: items.map((item) => renderItem(item)) }));
    }
}
export default List;
