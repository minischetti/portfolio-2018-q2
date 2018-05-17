import { Director } from './director';

export const DIRECTOR: Director[] = [
  { path: '/', title: '' },
  { path: '/profile/choose', title: 'Welcome. Please select a profile.' },
  { path: '/profile/dom', title: 'Profile retrieved. Is there anything else I can do for you?', helper: 'You can say things like experience, skills, or help.' },
  { path: '/help', title: 'Here\'s everything you can ask me.', helper: 'You can ask in form of full questions or use the keywords below.' },
  { path: '/not-found', title: 'I\'m sorry, but I don\'t recognize that command.', helper: 'You can say things like experience, skills, or help.' }
]
