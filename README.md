# EmagreceJá - Aplicativo de Acompanhamento de Emagrecimento


![Emagreça já](/src/assets/EmagreçaJá.png)


## 📋 Sobre o Projeto

**EmagreceJá** é uma aplicação web moderna desenvolvida para ajudar pessoas a acompanhar sua jornada de emagrecimento de forma visual e intuitiva. A plataforma permite que os usuários registrem seu peso, visualizem gráficos de progresso, calculem seu IMC e estabeleçam metas de emagrecimento.

O objetivo principal é fornecer uma ferramenta completa que motive os usuários a manterem o foco em seus objetivos de saúde através de dados visuais e estatísticas personalizadas.

## ✨ Funcionalidades Principais

- **Registro de Peso**: Adicione, edite e exclua registros de peso com datas específicas
- **Cálculo Automático de IMC**: Visualize seu Índice de Massa Corporal calculado automaticamente
- **Gráficos Interativos**: Acompanhe sua evolução através de gráficos de peso e IMC
- **Análise Comparativa**: Visualize a relação entre seu peso e IMC ao longo do tempo
- **Definição de Metas**: Estabeleça metas de peso e acompanhe seu progresso
- **Perfil Personalizado**: Configure suas informações pessoais como altura, idade e gênero
- **Dashboard Intuitivo**: Visualize estatísticas e resumos do seu progresso
- **Design Responsivo**: Acesse a aplicação em qualquer dispositivo


## 📊 Screenshots

![Tela inicial](/src/assets/image.png)
![Tela de Login](/src/assets/image-1.png)
![Tela de Dashboard](/src/assets/image-2.png)
![Tela de graficos](/src/assets/image-3.png)
![Tela de Perfil](/src/assets/image-4.png)

### Passos para Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JohannPDaniel/Sistema-de-Emagrecimento.git
cd emagrece-ja
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação em modo de desenvolvimento:


```bash
npm run dev
```

4. Acesse a aplicação em seu navegador:

```bash
http://localhost:5173
```

## 📁 Estrutura do Projeto

```bash
src/
├── components/           # Componentes reutilizáveis
│   ├── dashboard/        # Componentes específicos do dashboard
│   │   ├── BMIChart.tsx  # Gráfico de IMC
│   │   ├── ChartsPage.tsx # Página de análise de gráficos
│   │   ├── DashboardHome.tsx # Página inicial do dashboard
│   │   ├── Profile.tsx   # Componente de perfil do usuário
│   │   ├── WeightChart.tsx # Gráfico de peso
│   │   └── WeightTracker.tsx # Gerenciamento de registros de peso
│   ├── GlobalStyle.tsx   # Estilos globais
│   └── ProtectedRoute.tsx # Rota protegida para autenticação
├── config/               # Configurações da aplicação
│   └── store/            # Configuração do Redux
│       ├── hooks.ts      # Hooks personalizados para Redux
│       ├── index.ts      # Configuração principal da store
│       └── modules/      # Slices do Redux
│           ├── authSlice.ts # Slice para autenticação
│           └── healthDataSlice.ts # Slice para dados de saúde
├── pages/                # Páginas principais
│   ├── Dashboard.tsx     # Layout principal do dashboard
│   ├── LandingPage.tsx   # Página de apresentação
│   └── LoginPage.tsx     # Página de login/cadastro
├── routes/               # Configuração de rotas
│   └── AppRoutes.tsx     # Definição das rotas da aplicação
├── utils/                # Utilitários
│   └── healthCalculations.ts # Funções para cálculos de saúde
├── App.tsx               # Componente principal
├── main.tsx              # Ponto de entrada da aplicação
└── theme.ts              # Configuração do tema MUI
```

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Redux Toolkit**: Gerenciamento de estado da aplicação
- **Redux Persist**: Persistência de dados entre sessões
- **React Router Dom**: Navegação entre páginas
- **Material UI**: Biblioteca de componentes para interface de usuário
- **Recharts**: Biblioteca para criação de gráficos
- **Fontsource**: Importação de fontes (Poppins)

<div>
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
    <img src="https://img.shields.io/badge/React_Router_Dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=https://github.com/mayannaoliveira.png&logoColor=white" />
    <img src="https://img.shields.io/badge/FontSource-FFFF00?style=for-the-badge&logo=https://github.com/mayannaoliveira.png&logoColor=white" />
</div>

## Contate me

<a href="https://wa.me/5519991069456">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="whatsap" />
</a>
<a href="https://www.linkedin.com/in/johann-patr%C3%ADcio-daniel-112425196/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="whatsap" />
</a>
