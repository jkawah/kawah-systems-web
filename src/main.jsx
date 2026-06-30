import React from "react";
import { createRoot } from "react-dom/client";

// Self-hosted fonts — bundled into the build, served same-origin (no flash, no Google dependency)
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";

import KawahSystems from "./KawahSystems.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KawahSystems />
  </React.StrictMode>
);
