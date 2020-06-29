import React from 'react';
import {Card, Icon, Text} from "native-base";

import styles from "./styles";

const SlideInformation = () => (
        <Card style={styles.container}>
            <Icon style={styles.icon} name={'information-circle'}/>
            <Text  style={styles.text}>Slide To Right to see more information</Text>
        </Card>
)

export default SlideInformation