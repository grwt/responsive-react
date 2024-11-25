import {Heading, Button,Text, VStack,Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
const Videos = () => {
  const headingsArr = [
    'Introduction to Videos',
    'Advanced Video Concepts',
    'Working with Multimedia',
    'Editing and Effects',
    'Finalizing and Publishing',
  ];

  const videosArr = [
    'https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4',
    'https://cdn.pixabay.com/video/2020/07/03/43781-436252322_large.mp4',
    'https://cdn.pixabay.com/video/2019/09/10/26747-360259390_large.mp4',
    'https://cdn.pixabay.com/video/2022/07/11/123817-729035790_large.mp4',
    'https://cdn.pixabay.com/video/2021/02/20/65807-515379587_large.mp4',
  ];
  const [videoSrc ,setVideoSrc]=useState(videosArr[0]);
  const [heading,setHeading]=useState(headingsArr[0]);
  return (
    <Stack direction={["column","row"]} h={"95vh"}>
      <VStack w={"full"} h={"100vh"}>
        <video src={videoSrc} style={
          {width:'100%',}
        }
        controls controlsList='nodownload'>
        </video>
        <VStack alignItems={"flex-start"}  p={"8"} w={"full"} overflow={'auto'}>
          <Heading >{heading}</Heading>
          <Text>These are random sample video </Text>
        </VStack>
      </VStack>
      <VStack w={["full","xl"]} h={['130vh','100vh']} p={"8"} spacing={"8"} alignItems={"stretch"} overflowY={"auto"}>
        {
        videosArr.map((item,index)=>(
          <Button onClick={()=>{setVideoSrc(item); setHeading(headingsArr[index])}} variant={"ghost"} colorScheme='purple'>Video {index+1}</Button>
        ))
      }
      </VStack>
    </Stack>
  )
}
export default Videos
