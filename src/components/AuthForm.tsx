import ErrorIcon from '@mui/icons-material/Error';
import { Button, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { AuthButton, ButtonFormBox, FormControl } from '../app/app.styled';
import { AuthFormData } from '../types/authTypes';

interface AuthFormProps {
  onSubmit: () => void;
  control: Control<AuthFormData>;
  errors: FieldErrors<AuthFormData>;
  error?: string;
}

function AuthForm({ onSubmit, control, errors, error }: AuthFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <InputLabel variant="outlined" sx={{ position: 'absolute', marginTop: '-38px' }} error={Boolean(errors.email) || Boolean(error)}>
          Username
        </InputLabel>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Email is required' }}
          render={({ field }) => (
            <TextField
              variant="outlined"
              type="text"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={Boolean(errors.email) || Boolean(error)}
              InputProps={{
                startAdornment: <InputAdornment position="end">{errors.email && <ErrorIcon color="error" />}</InputAdornment>,
              }}
            />
          )}
        />
      </FormControl>

      <FormControl>
        <InputLabel variant="outlined" error={Boolean(errors.password) || Boolean(error)} sx={{ position: 'absolute', marginTop: '-38px' }}>
          Password
        </InputLabel>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <TextField
              variant="outlined"
              type="password"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={Boolean(errors.password) || Boolean(error)}
              InputProps={{
                startAdornment: <InputAdornment position="end">{errors.password && <ErrorIcon color="error" />}</InputAdornment>,
              }}
            />
          )}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </FormControl>

      <ButtonFormBox>
        <Button sx={{ borderRadius: '4px', align: 'center', marginTop: '-180px', height: '24px', textTransform: 'none', color: '#4D4D4D' }}>
          Forgot your password?
        </Button>
        <AuthButton type="submit" fullWidth>
          Log in
        </AuthButton>
      </ButtonFormBox>
    </form>
  );
}

export default AuthForm;
