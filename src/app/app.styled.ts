import BoxMui from '@mui/material/Box';
import ButtonMui from '@mui/material/Button';
import CardMediaMui from '@mui/material/CardMedia';
import FormControlMui from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const FormControl = styled(FormControlMui)(() => ({
  width: '100%',
  height: '144px',
  gap: '48px',
}));

const AuthButton = styled(ButtonMui)(() => ({
  background: '#BAA182',
  color: '#000000',
  borderRadius: '4px',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    background: '#BAA182',
    boxShadow: '0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30)',
  },
}));

const ContentBox = styled(BoxMui)(() => ({
  width: '100%',
  height: 'auto',
  marginTop: '20%',
  marginLeft: '25%',
  marginRight: '40%',
  marginBottom: '20%',
  gap: '56px',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const HeaderBox = styled(BoxMui)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '32px',
}));

const AuthFormBox = styled(BoxMui)(() => ({
  width: '85x%',
  height: 'auto',
}));

const ButtonFormBox = styled(BoxMui)(() => ({
  width: '100%',
  height: 'auto',
  justifyContent: 'space-between',
}));

const LinksGroupBox = styled(BoxMui)(() => ({
  maxWidth:'430px',
  width: '87%',
  height: '32px',
  marginTop: '30%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const LogoCardMedia = styled(CardMediaMui)(() => {
  return {
    display: 'flex',
    height: '55px',
    paddingRight: '0px',
    alignItems: 'center',
    alignSelf: 'stretch',
  };
}) as typeof CardMediaMui;

const MacLogoCardMedia = styled(CardMediaMui)(() => {
  return {
    flexShrink: '0',
    marginLeft: '40px',
    marginTop: '71px',
  };
}) as typeof CardMediaMui;

export { AuthButton, AuthFormBox, ButtonFormBox, ContentBox, FormControl, HeaderBox, LinksGroupBox, LogoCardMedia, MacLogoCardMedia };
