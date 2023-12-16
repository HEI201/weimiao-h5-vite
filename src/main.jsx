import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './bot.js';
import './index.css';

import AppRouter from './router';

ReactDOM.createRoot(document.getElementById('root')).render(<AppRouter />)
