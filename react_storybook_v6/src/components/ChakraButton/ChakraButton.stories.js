import React from 'react'
import {Button} from '@chakra-ui/react'
//import { Button} from '@chakra-ui/core'

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        variantColor: {control: 'text'},
        children: {control: 'text'},
        onClick: {action: 'clicked'}
    }
}

const Template = args => <Button {...args}/>

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}

export const Log = () => (
    <Button variantColor='blue' onClick={() => console.log('Button Clicked', process.env.STORYBOOK_THEME)}>
        Log
    </Button>
)

/*
export const Success = () => <Button bgColor='red' size="l">Success</Button>
export const Danger = () => <Button colorScheme="red" size="xs">Danger</Button>
*/