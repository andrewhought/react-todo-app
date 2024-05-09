import { createBrowserRouter } from 'react-router-dom';
import Root from '../views/Root';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
]);
