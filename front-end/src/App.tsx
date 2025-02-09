// ----------------------------------------------------------------
// REACT
// ----------------------------------------------------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// ----------------------------------------------------------------
// ASSETS
// ----------------------------------------------------------------
import '@css/global.css'


// ----------------------------------------------------------------
// VIEWS
// ----------------------------------------------------------------
import Hello from '@views/Hello'


// ----------------------------------------------------------------
// ROUTING
// ----------------------------------------------------------------
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hello />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
