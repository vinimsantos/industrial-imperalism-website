import 
{ HeaderContainer,
  HeaderMenu,
  ImageLogo,
  LinkTo,
  LoginButton,
  MenuOption,
  SignInButton
} from './styles'

export const Header = () => {
    return (
            <HeaderContainer>
                <LinkTo to ='/home'>
                    <ImageLogo src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'/>
                </LinkTo>
                <HeaderMenu>
                    <MenuOption>
                        <LinkTo to ='/home'>Home</LinkTo>
                    </MenuOption>

                    <MenuOption>
                        <LinkTo to ='/donwload'>Donwload</LinkTo>
                    </MenuOption>

                    <MenuOption>
                        <LinkTo to ='/about'>About</LinkTo>
                    </MenuOption>
                    </HeaderMenu>

                    <LoginButton>
                        <LinkTo to="/login">Log In</LinkTo>                                       
                    </LoginButton>

                    <SignInButton>
                        <LinkTo to="/signup">Sign Up</LinkTo>
                    </SignInButton>
            </HeaderContainer>
    )
}