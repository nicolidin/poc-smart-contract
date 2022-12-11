import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    tersary: '#6200EE',
    quarsary: '#5f5a7b',
    toto: '#ad7ef6',
    'primary-test-1': '#FFFFFF',
    'primary-darken-1': '#3700B3',
    'primary-darken-2': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})
