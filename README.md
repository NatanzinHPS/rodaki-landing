# Rodaki - Landing Page

Landing page moderna e responsiva para o projeto Rodaki, plataforma de gestão de transporte fretado.

![Angular](https://img.shields.io/badge/Angular-20-red?style=flat-square&logo=angular)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18+ ou 20+) 
- **npm** (versão 9+ ou 10+) - Instalado automaticamente com Node.js
- **Angular CLI** (versão 20+)

---

## Como Rodar o Projeto

### **Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/rodaki-landing.git
cd rodaki-landing
```

### **Instalar Dependências**

```bash
npm install
```

Isso vai instalar:
- Angular 20
- Tailwind CSS 3.4
- Bootstrap Icons
- Todas as dependências necessárias

### **Rodar o Servidor de Desenvolvimento**

```bash
ng serve
```

ou

```bash
npm start
```

A aplicação estará disponível em: **http://localhost:4200**

**Pronto!** A landing page já deve estar rodando!

---

## Estrutura do Projeto

```
rodaki-landing/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── landing-page/
│   │   │       ├── landing-page.component.ts      # Lógica do componente
│   │   │       ├── landing-page.component.html    # Template HTML
│   │   │       └── landing-page.component.scss    # Estilos SCSS
│   │   ├── app.component.ts                       # Componente raiz
│   │   └── app.config.ts                          # Configuração do app 
│   ├── styles.scss                                 # Estilos globais + Tailwind
│   └── index.html                                  # HTML principal
├── tailwind.config.js                              # Configuração do Tailwind
├── angular.json                                    # Configuração do Angular
├── package.json                                    # Dependências do projeto
└── README.md                                       # Este arquivo
```

---

## Tecnologias Utilizadas

### **Frontend**
- **Angular 20** - Framework principal
- **Tailwind CSS 3.4** - Framework de estilo utilitário
- **Bootstrap Icons 1.11** - Biblioteca de ícones

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido pela equipe Rodaki - Facens 2025**
