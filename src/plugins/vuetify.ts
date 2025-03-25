// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          background: '#FFFFFF',
          surface: '#F5F5F5',
          error: '#D32F2F',
          info: '#0288D1',
          success: '#388E3C',
          warning: '#FBC02D',
        }
      },
      dark: {
        colors: {
          primary: '#90CAF9',
          secondary: '#B0BEC5',
          background: '#282828',
          surface: '#424242',
          error: '#EF5350',
          info: '#80DEEA',
          success: '#66BB6A',
          warning: '#FFB74D',
        }
      },
    },
  },
});
