import { ICards } from './types';
import spiderMan from '../images/spider-man.png';
import batman from '../images/batman.png';
import wolverine from '../images/wolverine.png';
import deadpool from '../images/deadpool.png';
import groot from '../images/groot.png';
import ironMan from '../images/iron-man.png';
import antMan from '../images/ant-man.png';
import panther from '../images/pantera.png';

export const initialData: ICards[] = [
  { id: 1, alt: 'Spider-man', src: spiderMan, front: false },
  { id: 2, alt: 'Spider-man', src: spiderMan, front: false },
  { id: 3, alt: 'Batman', src: batman, front: false },
  { id: 4, alt: 'Batman', src: batman, front: false },
  { id: 5, alt: 'Wolverine', src: wolverine, front: false },
  { id: 6, alt: 'Wolverine', src: wolverine, front: false },
  { id: 7, alt: 'Deadpool', src: deadpool, front: false },
  { id: 8, alt: 'Deadpool', src: deadpool, front: false },
  { id: 9, alt: 'Groot', src: groot, front: false },
  { id: 10, alt: 'Groot', src: groot, front: false },
  { id: 11, alt: 'Iron-man', src: ironMan, front: false },
  { id: 12, alt: 'Iron-man', src: ironMan, front: false },
  { id: 13, alt: 'Ant-man', src: antMan, front: false },
  { id: 14, alt: 'Ant-man', src: antMan, front: false },
  { id: 15, alt: 'Panther', src: panther, front: false },
  { id: 16, alt: 'Panther', src: panther, front: false },
];
