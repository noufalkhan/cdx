// theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({


  components: {
    MuiButton: {
      styleOverrides: {
        sizeExtraSmall: {
          padding: '4px 8px',
          fontSize: '0.75rem',
        },
      },
      variants: [
        {
          props: { size: 'extraSmall' },
          style: {
            padding: '4px 8px',
            fontSize: '0.8rem',
          },
        },
      ],
    },
  },
});

export default theme;
