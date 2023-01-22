'use client';

import { Box, Heading, Text, Button, Flex, HStack, Icon, Stack  } from '@chakra-ui/react';
import { CheckBox } from '@/icons/check';
import React from 'react'

const TickCheck = ({children}:{children:React.ReactNode}) => {
  return (
    <HStack direction={['column', 'row']}  pt='10px' pl='68px' >
      <Icon as={CheckBox} />
      <Text pl='14px' >{children}</Text>
    </HStack>
  )
}

export default function Pricing() {
    
  return (
    <Box width='50%'
          ml='25%'
          mt='-8%'
          borderRadius='12px'
          bg='#FFFFFF' boxShadow= '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>
        <Flex direction='row'>
        <Box bg='purple.50' textAlign='center' width='378px' height='326px' p='60px'>
            <Text fontWeight='800' fontSize='24px' >Premium PRO</Text>
            <Heading as='h3' fontWeight='800' fontSize='60px' >$329</Heading>
            <Text mt='8px' fontWeight='500' fontSize='18px' >billed just once</Text>
            <Button mt='10px' colorScheme='purple' size='md' width='282px' height='51px'>
                Get Started
                </Button>
        </Box>
        <Box textAlign='left' width='auto' height='auto' >
        <Stack as='ul'>
          <Text fontWeight='400' pt='60px' pl='64px'>Access these features when you get this pricing package for your business.</Text>
          <TickCheck>International calling and messaging API</TickCheck>
          <TickCheck>Additional phone numbers</TickCheck>
          <TickCheck>Automated messages via Zapier</TickCheck>
          <TickCheck>24/7 support and consulting</TickCheck>
        </Stack>
        </Box>
        </Flex>

        </Box>
   
  )
}
