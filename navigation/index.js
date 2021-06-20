import React from 'react'
import { View, Text } from 'react-native'
import { AuthProvider } from './AuthProvider'
import Routes from './Routes'
export default function index() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
 
    )
}
