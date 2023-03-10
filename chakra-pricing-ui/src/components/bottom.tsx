'use client'

import { MoneyBackGuarnteeIcon, HassleFreeIcon, MonthlySubscriptionIcon } from '@/icons/check';
import {HStack, Icon, Text, Box, Stack} from '@chakra-ui/react'

const Feature = ({children, icon}:{children:React.ReactNode, icon: React.ElementType }) => {

    return (
      <HStack spacing='6'>
        <Icon as={icon} boxSize={['8', '8' ,'12']} ml='6' />
        <Text textAlign='left' fontSize='lg' fontWeight='bold' >{children}</Text>
      </HStack>
    )
  }

  export default function BottomFeatures(){
    return(
        <Box maxW='1024px' m='auto' pt='16' pb='8' as='section'>
            <Stack direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <Feature icon={MoneyBackGuarnteeIcon} >30 days money back Guarantee</Feature>
                <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={MonthlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
            </Stack>

        </Box>
    )
  }