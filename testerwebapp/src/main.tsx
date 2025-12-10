import { Provider } from './provider.tsx';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './styles/reset.css';
import './styles/typography.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>,
);
