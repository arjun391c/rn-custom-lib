import styles from './Button.styles'
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { icn } from '../../assets/images/icons'

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
            <Image source={icn} style={{height: 20, width: 20}}/>
        </TouchableOpacity>
    )
}

export default Button