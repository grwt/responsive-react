import { Stack,Image,Text, Heading, Box,Container } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';





const headingOptions= {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform : 'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl',
    

    
};

const Home = () => {
  return (
  <Box>
   <MyCarousel/>
   <Container maxW={"container.xl"} minH={'100vh'} p={['8', '16']} >
    <Heading textTransform={"uppercase"} w={"fit-content"} borderBottom={'2px solid'} m='auto' py='2'> Services</Heading> 
    <Stack h='full' p={'4'} alignItems={'center'} direction={['column','row']}>
       <Image src={img5} h={["56", "350"]} filter={"hue-rotate(-130deg)"}/> 
       <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam totam pariatur dicta qui voluptates alias mollitia, quod numquam sit. Aperiam pariatur ipsa officia dicta hic incidunt quidem, labore quo optio animi natus ut quod harum eveniet illum possimus quasi itaque nostrum id adipisci, atque voluptatem! Praesentium laborum saepe officia. Sequi distinctio reprehenderit sed ipsum mollitia, amet optio quas tempora totam quibusdam asperiores. Vel ratione esse cum, sed ipsum labore provident neque tempora at laboriosam quae!
       </Text>
    </Stack>


   </Container>
  </Box>
  )
}



const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
     <Box w ="full" h={'100vh'} overflowY="auto">
        <Image src={img1} />
        <Heading  bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
            Watch The Future
        </Heading>

     </Box>
     <Box w ="full" h={'100vh'} overflowY="auto">
        <Image src={img2} />
        <Heading bgColor={"whiteAlpha.900"} color={'black'}  {...headingOptions}>
            Future Is Gaming
        </Heading>

     </Box>
     <Box w ="full" h={'100vh'} overflowY="auto">
        <Image src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={'black'}  {...headingOptions}>
            Gaming on console
        </Heading>

     </Box>
     <Box w ="full" h={'100vh'} overflowY="auto">
        <Image src={img4} />
        <Heading bgColor={"whiteAlpha.600"} color={'black'}  {...headingOptions}>
             Night Gaming 
        </Heading>

     </Box>
    </Carousel>
);
export default Home
