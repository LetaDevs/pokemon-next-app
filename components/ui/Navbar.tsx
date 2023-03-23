import NextLink from "next/link";
import Image from "next/image";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

  const {theme} = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray100.value,
    }}>
      <Image 
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
        alt='icono pokemon'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref legacyBehavior>
        <Link>
          <Text color='white' h2>p</Text>
          <Text color='white' h2 css={{fontSize: '22px', marginBottom: '0px'}}>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{flex: 1}}/>

      <NextLink href='/favorites' passHref legacyBehavior>
        <Link>
          <Text color='white' h3>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
