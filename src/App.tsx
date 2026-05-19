import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
❯ cat src/App.tsx
export default function App() {
  return (
    <div>
      <h1>Fullstack Fixture</h1>
      <p>Frontend (vite + react) + Backend (Express) + ER (edge.ts) all in one project.</p>
    </div>
  );
}