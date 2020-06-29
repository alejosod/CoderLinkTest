import React from 'react';
import { Header, Icon, Input, Item} from "native-base";


const SearchComponent = props => {
    const { searchCallback } = props;

    return (
        <Header searchBar rounded >
            <Item>
                <Icon name="ios-search" />
                <Input onChangeText={(e) => searchCallback(e)} placeholder="Search" />
            </Item>
        </Header>
    )
}

export default SearchComponent;