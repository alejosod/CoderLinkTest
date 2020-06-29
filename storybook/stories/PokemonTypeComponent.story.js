import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header, Content} from 'native-base'
import TypeComponent from "../../Components/TypeComponent";

storiesOf('TypeComponent', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            <Content>
                {createStory()}
            </Content>
        </Container>
    ))
    .add('default', () => (
        <TypeComponent type={'Grass'} />
    ))

