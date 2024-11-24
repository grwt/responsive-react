import {Heading, VStack,Button, Text,Container } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Premiumvideo = () => {
  return (
    <Container maxW={"container.xl"} h={['full',"100vh"]} p={"16"}>

    <VStack h={"full"} justifyContent={"center"}>
      <Heading>OOPSIE NO MORE FREE CONTENT!</Heading>
     
        <Text size={"xl"} textTransform={"uppercase"}> Subscribe for more premium Video</Text>
        <Button _hover={{bgColor:"black"}} colorScheme='purple' variant={"outline"}>
          <Link to={'/signup'}>Signup</Link>
        </Button>
    </VStack>
    </Container>
  )
}

export default Premiumvideo
