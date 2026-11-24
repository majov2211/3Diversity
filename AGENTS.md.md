\# AGENTS.md \- Dimension Lab

\#\# Proyecto  
Tienda online de impresión 3D en PLA, Resina y PETG.

\#\# Stack y Diseño Visual  
\- Tipografías: 'Oswald' (encabezados, menú "CATÁLOGO" y botones) e 'Inter' (textos, descripciones y formularios).  
\- Colores principales: Primario \`\#2596BE\`, Header \`\#1E252D\`, Fondos \`\#FFFFFF\` / \`\#F8F9FA\`, Texto \`\#212529\`. Verde acento/rastreo \`\#059669\`.  
\- Variables CSS mapeadas: \`--ag-primary: \#2596be;\` y \`--ag-font-heading: 'Oswald';\`.

\#\# Reglas Inviolables de Negocio  
\- \*\*Cero Registros/Login:\*\* No crear formularios de inicio de sesión, registro ni gestión de usuarios/contraseñas.  
\- \*\*Rastreo por Guía:\*\* Toda la consulta de estado de pedidos se realiza únicamente con el \*\*Número de Guía o Pedido\*\*.  
\- \*\*Nombres de Menú:\*\* Usar "CATÁLOGO" en el header para la navegación principal de categorías.  
\- \*\*Tarjetas de Producto:\*\* Mantener \`min-height\` y fuentes proporcionales (\~0.92rem) para evitar cortes en títulos largos de productos.  
