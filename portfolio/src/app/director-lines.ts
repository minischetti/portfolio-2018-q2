import { Director } from './director';

export const DIRECTOR: Director[] = [
  { state: 'name', title: 'Hello, my name is' },
  { state: 'profile-select', title: 'Welcome, {{visitorName}}. Please select a profile.' },
  { state: 'profile-retrieved', title: 'Profile retrieved. Is there anything else I can do for you?' },
  { state: 'help', title: "Here's everything you can ask me." }
]
