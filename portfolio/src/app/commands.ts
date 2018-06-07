import {Command} from './command';

export const COMMANDS: Command[] = [
  {
    name: 'profile',
    synonyms: ['job', 'role', 'experience', 'position', 'company', 'work', 'dom'],
    description: 'Learn more about Dominic\'s role at Williams-Sonoma, Inc.',
    externalLink: false,
    destination: 'profile/dom'
  },
  {
    name: 'skills',
    synonyms: ['technology', 'technologies'],
    description: 'Learn more about technologies Dominic is proficient in.',
    externalLink: false,
    destination: 'profile/dom/skills'
  },
  {
    name: 'help',
    synonyms: ['commands'],
    externalLink: false,
    destination: 'help'
  },
  {
    name: 'linkedin',
    description: 'View Dominic\'s LinkedIn profile.',
    externalLink: true,
    destination: 'https://www.linkedin.com/domminischetti'
  },
  {
    name: 'github',
    description: 'View Dominic\'s GitHub profile.',
    externalLink: true,
    destination: 'https://www.github.com/minischetti'
  },
  {
    name: 'email',
    description: 'Send Dominic an email.',
    externalLink: true,
    destination: 'mailto:domminischetti@gmail.com'
  },
  {
    name: 'resume',
    description: 'View Dominic\'s resume.',
    externalLink: true,
    destination: 'http://www.minischetti.com/resume.pdf'}
];
