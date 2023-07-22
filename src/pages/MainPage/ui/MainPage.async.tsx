import { resolve } from 'path';
import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК НЕ СТОИТ ДЕЛАТЬ В ЖИЗНИ
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
