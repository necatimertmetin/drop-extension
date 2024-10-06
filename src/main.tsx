
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app'); // 'app' ID'sine sahip DOM elementini al
const root = createRoot(container!); // TypeScript'te null olabileceği için `!` kullanılıyor
root.render(<App />); // App bileşenini render et
