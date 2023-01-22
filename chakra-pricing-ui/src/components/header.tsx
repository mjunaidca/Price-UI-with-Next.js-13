'use client';

import React from 'react'
import { Box, Heading, Text  } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as='section' bg='#6B46C1' width='100%' height='397px' paddingTop='0px' paddingLeft='0px'>
        <Heading 
            textColor='#F7FAFC' textAlign='center'
            fontSize='48px'  fontWeight='800' paddingTop='88px'
            >
            Simple pricing for your business
            </Heading>
        <Text   
            textColor='#F7FAFC' textAlign='center' 
            fontSize='24px'  fontWeight='500' paddingTop='4px'
        >
        Plans that are carefully crafted to suit your business..
        </Text>
        </Box>
  )
}
