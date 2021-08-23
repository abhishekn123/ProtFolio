import { IconButton } from '@chakra-ui/button'
import { MoonIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Theme({toggleColorMode=()=>{}}) {
  return (
    <IconButton onClick={toggleColorMode} aria-label="Search database" icon={<MoonIcon  fontSize="lg" />} />
  )
}
