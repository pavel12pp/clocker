import { createContext } from 'react';

// Создаем два контекста
let TimersContext = createContext([]);
let SetTimersContext = createContext(null);

// Экспортируем оба контекста
export { TimersContext, SetTimersContext };