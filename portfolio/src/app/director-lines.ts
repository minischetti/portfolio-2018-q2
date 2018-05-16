import { Director } from './director';

export const DIRECTOR: Director[] = [
  { path: '/', title: '' },
  { path: '/profile/choose', title: 'Welcome, visitorName. Please select a profile.' },
  { path: '/profile/dom', title: 'Profile retrieved. Is there anything else I can do for you?' },
  { path: '/help', title: 'Here\'s everything you can ask me.' },
  { path: '/not-found', title: 'I\'m sorry, but I don\'t recognize that command.' }
]
