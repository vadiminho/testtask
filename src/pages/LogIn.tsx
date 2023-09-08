import { Box, Button, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { AuthFormBox, ContentBox, HeaderBox, LinksGroupBox, LogoCardMedia, MacLogoCardMedia } from '../app/app.styled';
import { RootState } from '../app/redux/store';
import cybellumLogo from '../assets/images/cybellum-logo-vertical-black.svg';
import imacDigTwinsImage from '../assets/images/imac_dig_twins.png';
import AuthForm from '../components/AuthForm';
import useLogIn from '../hooks/useLogIn';

function LogIn() {
  const { control, handleSubmit, errors } = useLogIn();
  const error = useSelector((state: RootState) => state.auth.authenticatedError);

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <ContentBox>
          <HeaderBox>
            <LogoCardMedia>
              <img src={cybellumLogo} alt="cybellum-logo-vertical-black.svg" />
            </LogoCardMedia>
            <Typography variant="h1" component="div">
              <Box sx={{ fontWeight: '300', fontSize: '56px', lineHeight: '64px', letterSpacing: '-0.5px' }}>Welcome to the</Box>
              <Box sx={{ fontWeight: '300', fontSize: '56px', lineHeight: '64px', letterSpacing: '-0.5px' }}>Product Security Platform</Box>
            </Typography>
          </HeaderBox>

          <AuthFormBox>
            <AuthForm control={control} errors={errors} onSubmit={handleSubmit} error={error} />
          </AuthFormBox>
          <LinksGroupBox>
            <Button
              sx={{ alignItems: 'center', marginTop: '-180px', fontWeight: '500', size: '16px', lineHeight: '24px', textTransform: 'none', color: '#4D4D4D' }}
            >
              Privacy policy
            </Button>
            <Button sx={{ align: 'center', marginTop: '-180px', height: '24px', textTransform: 'none', color: '#4D4D4D' }}>Terms of use</Button>
            <Button sx={{ align: 'center', marginTop: '-180px', height: '24px', textTransform: 'none', color: '#4D4D4D' }}>Contact us</Button>
          </LinksGroupBox>
        </ContentBox>
      </Grid>

      <Grid item xs={12} sm={7}>
        <MacLogoCardMedia>
          <img src={imacDigTwinsImage} alt="cybellum-logo-vertical-black.svg" />
        </MacLogoCardMedia>
      </Grid>
    </Grid>
  );
}

export default LogIn;
