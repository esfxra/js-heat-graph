import { createDate, generateData } from './scripts/generateData';
import { Calendar } from './lib/Calendar';

// Generate data
const start = createDate(2021, 1, 31);
const end = createDate(2021, 4, 12);
const data = generateData(start, end);

// Graph calendar
const calendar = new Calendar(data, '#root');
