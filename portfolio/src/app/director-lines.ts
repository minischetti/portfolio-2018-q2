import { Director } from './director';

export const DIRECTOR: Director[] = [
  { path: '/', title: 'Hello, my name is' },
  { path: 'profile/select', title: 'Welcome, {{visitorName}}. Please select a profile.' },
  { path: 'profile/dom', title: 'Profile retrieved. Is there anything else I can do for you?' },
  { path: 'help', title: "Here's everything you can ask me." }
]
