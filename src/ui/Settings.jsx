import React from 'react'
import Row from './Row'
import Heading from './Heading'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'
function Settings() {
    return (
        <Row>
            <Heading as={'h1'}>Update hotel settings</Heading>
            <UpdateSettingsForm />
        </Row>
    )
}

export default Settings