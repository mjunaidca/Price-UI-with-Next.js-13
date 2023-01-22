'use client';

import React from 'react'
import { Box, Heading, Text  } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as='section' bg='purple.600' width='100%' height='397px' paddingTop='0px' paddingLeft='0px'>
        <Heading 
            textColor='gray.50' textAlign={['left', 'left', 'center']}
            fontSize={['3xl', '3xl', '5xl']}  fontWeight='extrabold' pt='88px' pl='23px'
            >
            Simple pricing for your business
            </Heading>
        <Text   
            textColor='gray.100' textAlign={['left', 'left', 'center']}
            fontSize={['lg', 'lg', '2xl']} fontWeight='medium' paddingTop='3' pl='6'
        >
        Plans that are carefully crafted to suit your business..
        </Text>
        </Box>
  )
}
