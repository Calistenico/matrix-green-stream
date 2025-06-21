
# Como hospedar na Hostinger

## Passos para fazer o deploy:

### 1. Gerar os arquivos de produção
Execute no terminal:
```bash
npm run build
```

Isso criará uma pasta `dist` com todos os arquivos otimizados.

### 2. Upload para Hostinger
1. Acesse o painel da Hostinger
2. Vá em "Gerenciador de Arquivos" ou use FTP
3. Navegue até a pasta `public_html` do seu domínio
4. Faça upload de TODOS os arquivos da pasta `dist` para `public_html`
5. Certifique-se de que o arquivo `index.html` está na raiz da pasta `public_html`

### 3. Configuração adicional (se necessário)
Se você estiver usando um subdomínio ou pasta específica:
- Coloque os arquivos na pasta correspondente
- Certifique-se de que as configurações de DNS estejam corretas

### 4. Verificação
Após o upload, acesse seu domínio para verificar se o site está funcionando corretamente.

## Observações importantes:
- O site é uma SPA (Single Page Application) com React
- Todos os recursos estão otimizados para carregamento rápido
- As imagens e assets estão incluídos na build
- O site é 100% responsivo e funciona em todos os dispositivos

## Comandos úteis:
- `npm run dev` - Executar em modo desenvolvimento
- `npm run build` - Gerar arquivos para produção
- `npm run preview` - Visualizar a build localmente
