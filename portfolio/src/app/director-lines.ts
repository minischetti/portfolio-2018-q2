import { Director } from './director';

export const DIRECTOR: Director[] = [
  { path: '/',
    title: '',
    helper: ''
  },
  { path: '/profile/choose',
    title: 'Welcome. Please select a profile.',
    helper: ''
  },
  { path: '/profile/dom',
    title: 'Profile retrieved. Is there anything else I can do for you?',
    helper: 'You can say things like experience, skills, or help.'
  },
  { path: '/profile/dom/skills',
    title: 'Here are the skills and technologies Dominic is proficient in.',
    helper: ''
  },
  { path: '/help',
    title: 'Here\'s everything you can ask me.',
    helper: 'You can ask in the form of full questions or use the keywords below.'
  },
  { path: '/not-found',
    title: 'I\'m sorry, but I don\'t recognize that command.',
    helper: 'You can say things like experience, skills, or help.'
  }
]
