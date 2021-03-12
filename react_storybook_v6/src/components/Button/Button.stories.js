import Button from './Button'
//import Center from '../Center/Center'

export default {
    title: 'Form/Button',
    component: Button,
    /*args: {
        children: 'Button'
    },*/
    //decorators: [story => <Center>{story()}</Center>] //adesso i decorators sono globali
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

//SOSTITUIAMO TUTTO QUESTO CON I DECORATORS//

/*export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center>
export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>
export const Success = () => <Center><Button variant='success'>Success</Button></Center>
export const Danger = () => <Center><Button variant='danger'>Danger</Button></Center>

const Template = (args) => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = { 
    variant: 'primary',
    //children: 'Primary Args' //riga 33
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    //children: 'Secondary Args' //riga 33
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    //children: 'Long Primary Args' //lo commentiamo perchè abiamo aggiunto args nell export default
}*/