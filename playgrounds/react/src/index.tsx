import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './../../../packages/react/src/atoms/Button/Button';

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement)
root.render(
   <React.StrictMode>
+    <Button label="Example Button"/>
+  </React.StrictMode>
   );