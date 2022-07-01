import styles from './Button.styles'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

export interface ButtonProps extends TouchableOpacityProps {
    label: string,
}

const Button = (props: ButtonProps) => {
    const {label, onPress, ...rest} = props
    return (
        <TouchableOpacity 
            style={styles.container} 
            {...rest}
        >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button