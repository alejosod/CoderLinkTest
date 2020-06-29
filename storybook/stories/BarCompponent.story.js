import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header, Content} from 'native-base'
import BarComponent from "../../Components/BarComponent/BarComponent";

storiesOf('BarComponent', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            <Content>
                {createStory()}
            </Content>
        </Container>
    ))
    .add('default', () => (
        <BarComponent value={80} name={'HP'} />
    ))

