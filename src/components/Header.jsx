import React from 'react'
import {HStack, VStack,Drawer, DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

  const {isOpen,onOpen,onClose}=useDisclosure();
  return (
  <>
   <Button  zIndex={"overlay"} onClick={onOpen} pos={'fixed'} top={'3'} left={'3'} colorScheme={'purple'} p={'0'} h={'10'} w={'10'}>
    <BiMenuAltLeft size={"25"}/>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>JOYBOY VIDEOS</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={"flex-start"}>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme={"purple"}> 
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}> 
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}> 
                        <Link to={'/premiumvideo'}>Premium Video</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}> 
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                    

                </VStack>
                <HStack position={'absolute'} bottom={'6'} left={'0'} justifyContent={'space-evenly'} w={'full'}>
                    <Button onClick={onClose} colorScheme={'purple'}>
                    <Link to={'/login'}>Log in</Link>

                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                    <Link to={'/signup'}>Sign up</Link>

                    </Button>

                </HStack>
            </DrawerBody>

        </DrawerContent>
        
    </Drawer>

  </>
  );
};

export default Header;
