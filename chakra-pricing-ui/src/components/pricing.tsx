'use client';

import { Box, Heading, Text, Button, Flex, HStack, Icon, Stack  } from '@chakra-ui/react';
import { CheckBox } from '@/icons/check';
import React from 'react'

const TickCheck = ({children}:{children:React.ReactNode}) => {
  return (
    <HStack direction={['column', 'row']}  pt='2' pl='auto' >
      <Icon as={CheckBox} />
      <Text pl='3' textAlign={['left', 'left', 'left']} >{children}</Text>
    </HStack>
  )
}

export default function Pricing() {
    
  return (
    <Box mx='6' mt='-40'>
    <Box 
          maxW='994px' 
          margin='auto'
          borderRadius='12px'
          overflow='hidden'
          boxShadow= '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>

        <Flex direction={["column", "column", "row"]}>

        <Box bg='purple.50' textAlign='center' p='60px'>

            <Text fontWeight='bold' fontSize='xl' >Premium PRO</Text>
            <Heading as='h2' fontWeight='bold' fontSize={['5xl','5xl','6xl' ]} >$329</Heading>
            <Text mt='2' fontWeight='medium' fontSize='18px' >billed just once</Text>
            <Button mt='3' colorScheme='purple' size='lg' width='282px' height='51px'>
                Get Started
                </Button>
        </Box>
        <Box bg='white' textAlign='left' p='60px'>
        <Stack as='ul'>
          <Text fontWeight='normal' pl='auto'>Access these features when you get this pricing package for your business.</Text>
          <TickCheck>International calling and messaging API</TickCheck>
          <TickCheck>Additional phone numbers</TickCheck>
          <TickCheck>Automated messages via Zapier</TickCheck>
          <TickCheck>24/7 support and consulting</TickCheck>
        </Stack>
        </Box>
        </Flex>

        </Box>
        </Box>
   
  )
}
