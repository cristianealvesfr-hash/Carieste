import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { ScrollToTop } from "./components/ScrollToTop";
import { LgpdBanner } from "./components/LgpdBanner";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        {/* Redireciona qualquer rota desconhecida para o início */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Banner LGPD exibido para novos usuários */}
      <LgpdBanner />
    </BrowserRouter>
  );
}

export default App;
