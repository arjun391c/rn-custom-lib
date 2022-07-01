import styles from './Card.styles'
import { View } from 'react-native'
import React, { ReactNode } from 'react'

export interface CardProps {
    children: ReactNode
}

const Card = (props: CardProps) => {
    const {children} = props
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Card