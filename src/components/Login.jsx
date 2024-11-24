import React from 'react'
import {Text,Button,Container,VStack,Heading,Input} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container maxW={"container.xl"} h={'100vh'} p={'16'}>
<form >
    <VStack alignItems={'stretch'} w={["full","96"]} m={'auto'} my={'16'}>

    <Heading>Welcome Back</Heading>
    <Input placeholder={"Email"} type={'email'} required focusBorderColor={'purple.500'}></Input>
    <Input placeholder={"Password"} type={'password'} required focusBorderColor={'purple.500'}></Input>
    
    <Button colorScheme='purple'  type='submit'>Log In</Button>
    <Button  _hover={{ color: 'purple.600', textDecoration: 'underline' }} variant={"link"} alignSelf={"flex-end"} >
        <Link to={'/forgetpassword'}>Forget Password</Link>
    </Button>
    <Text textAlign={"right"}>New User?{"  "}
    <Button variant={"link"} colorScheme='purple'>
        <Link to={'/signup'}>Sign Up</Link>
    </Button>
    </Text>
    </VStack>
</form>

    </Container>
  )
}

export default Login
