import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card } from 'my-lib'

const App = () => {
    return (
        <View style={{backgroundColor: '#fff', flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Card>
                <Button label="Submit"/>
            </Card>
        </View>
    )
}

export default App