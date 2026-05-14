export const projects = [
  {
    title: "Machine Learning em Municípios do Nordeste",
    description: "Aplicação de Técnicas de Machine Learning na Identificação de Municípios do Nordeste Brasileiro com Maior Potencial para Atração de Investimentos a Partir de Dados Socioeconômicos",
    stack: "Python, XGBoost, Scikit-Learn, Pandas",
    image: "",
    featured: true,
    pdfs: [
      { label: "Artigo Científico", file: "/tcc-monografia.pdf" },
      { label: "Apresentação em Slides",   file: "/tcc-algoritmos.pdf" },
    ],
    narrative: {
      problem: "A dificuldade em avaliar e cruzar indicadores socioeconômicos dispersos para identificar quais municípios do Nordeste apresentam maior potencial para investimentos e desenvolvimento.",
      solution: "Desenvolvimento de um pipeline de dados com engenharia de features e treinamento de modelos de Machine Learning supervisionados para mapear o cenário dos municípios.",
      result: "O modelo forneceu métricas de desempenho robustas na avaliação do PIB per capita, demonstrando alta capacidade de generalização para auxiliar agentes públicos e investidores na tomada de decisão."
    },
    link: "https://github.com/arthurlins7/Machine-Learning-aplicado-a-munic-pios-do-Nordeste.git"
  },
  {
    title: "GeekCommerce Segments",
    description: "Pipeline end-to-end de segmentação de clientes com RFM + K-Means, playbook de campanhas com impacto financeiro estimado e dashboard interativo com deploy em produção.",
    stack: "Python, Scikit-Learn, FastAPI, Next.js, Clustering, RFM",
    image: "",
    narrative: {
      problem: "E-commerces acumulam milhões de transações sem saber quem são seus clientes de verdade — quais estão prestes a sair, quais podem gastar mais, quais já foram perdidos. Sem segmentação, campanhas de marketing são genéricas e desperdiçam orçamento.",
      solution: "ETL sobre 1M+ transações reais (UCI Online Retail II), cálculo de scores RFM com normalização logarítmica, clustering K-Means com seleção de k via Elbow Method e Silhouette Score. Cada cluster foi traduzido em uma persona de negócio com ação, métrica de sucesso e impacto financeiro estimado.",
      result: "5.878 clientes segmentados em 4 personas. £2,7M de potencial incremental identificado sobre £17,7M de faturamento histórico."
    },
    link: "https://github.com/arthurlins7/GeekCommerce-Segments",
    dashboard: "https://geek-commerce-segments.vercel.app"
  },
  {
    title: "NBA Performance Signals",
    description: "Pipeline end-to-end de detecção de anomalias de performance na NBA — identifica automaticamente quando jogadores estão abaixo do esperado e entrega um feed diário de alertas com deploy em produção e atualização automática.",
    stack: "Python, FastAPI, Next.js, PostgreSQL, Anomaly Detection, NBA API",
    image: "",
    narrative: {
      problem: "Times de analytics esportivos precisam identificar rapidamente quando um jogador está em queda de rendimento — seja em todas as métricas ou em uma dimensão específica. Fazer isso manualmente para centenas de jogadores por noite é inviável.",
      solution: "Pipeline completo com 5 temporadas de boxscores da NBA via nba_api. Z-Score calculado por baseline acumulado da temporada (com fallback para a temporada anterior), separando quedas globais de quedas isoladas por métrica. Atualização automática diária via GitHub Actions todo dia às 6h.",
      result: "Feed diário com dois tipos de alerta — queda global e queda isolada — com fotos dos jogadores, logos dos times via CDN oficial da NBA, MetricBars visuais mostrando cada métrica comparada à média da temporada e perfil histórico completo por jogador."
    },
    link: "https://github.com/arthurlins7/NBA_Perfomance_Signals.git",
    dashboard: "https://nba-perfomance-signals.vercel.app"
  },
  {
    title: "Detecção de Fraudes em Cartões de Crédito",
    description: "Sistema de análise de anomalias para identificação de transações financeiras fraudulentas em cenários de Big Data.",
    stack: "Python, Análise de Dados, Machine Learning",
    image: "",
    narrative: {
      problem: "Instituições financeiras lidam com bases de dados massivas e precisam identificar anomalias transacionais em tempo hábil para evitar perdas milionárias com fraudes, minimizando falsos positivos.",
      solution: "Implementação de técnicas avançadas de análise exploratória e algoritmos de classificação em um contexto altamente desbalanceado de Big Data.",
      result: "O sistema conseguiu isolar transações fraudulentas com alta precisão (Recall otimizado), reduzindo consideravelmente a necessidade de análise humana manual."
    },
    link: "https://github.com/Luscas-Fernandes/big-data-2025.2-CesarSchool.git"
  },
  {
    title: "Classificação de Sentimentos com Deep Learning",
    description: "Processamento de Linguagem Natural (NLP) aplicado à classificação de textos curtos em redes sociais utilizando arquitetura LSTM.",
    stack: "Python, TensorFlow/Keras, LSTM, NLP",
    image: "",
    narrative: {
      problem: "A ambiguidade, ironia e o volume massivo de textos informais em redes sociais dificultam a extração automatizada da percepção do público sobre determinados temas.",
      solution: "Construção de uma rede neural profunda com camadas LSTM (Long Short-Term Memory), capazes de reter o contexto sequencial das palavras e classificar a polaridade das frases.",
      result: "O modelo atingiu níveis elevados de acurácia em bases de testes reais, sendo capaz de distinguir nuances semânticas complexas em tweets de forma totalmente automatizada."
    },
    link: "https://github.com/arthurlins7/DeepLearning_TweetsClassification.git"
  },
  {
    title: "Previsão de Demanda: Bike Sharing",
    description: "Análise preditiva de aluguel de bicicletas utilizando modelos de regressão para otimização de frota.",
    stack: "Python, Scikit-Learn, SVR, Pandas",
    image: "",
    narrative: {
      problem: "Prever a demanda de aluguel para garantir frota disponível nas estações e evitar tanto excesso quanto escassez de bicicletas.",
      solution: "Teste comparativo de múltiplos modelos de regressão. O SVR (Support Vector Regression) se destacou, entregando as melhores métricas de precisão frente aos demais algoritmos avaliados.",
      result: null
    },
    link: "https://github.com/arthurlins7/Bike_sharing.git"
  },
  {
    title: "Previsão de Casos de Sífilis Congênita",
    description: "Pipeline de dados com impacto social na saúde pública usando dados do DataSUS.",
    stack: "Python, Machine Learning, SMOTE, Pandas",
    image: "",
    narrative: {
      problem: "Dados do sistema de saúde pública são altamente desbalanceados, o que prejudica a capacidade dos modelos de aprender sobre as classes minoritárias (casos positivos).",
      solution: "Uso de SMOTE (Synthetic Minority Over-sampling Technique) para balancear as classes e permitir que o modelo aprendesse os padrões das ocorrências com eficácia.",
      result: null
    },
    link: ""
  },
  {
    title: "Modelo Preditivo de Inadimplência",
    description: "Pipeline end-to-end de predição de inadimplência em cobranças mensais — engenharia de features com histórico comportamental, validação Out-of-Time e inteligência de negócio acionável.",
    stack: "Python, LightGBM, Scikit-Learn, Pandas, Feature Engineering",
    image: "",
    featured: true,
    pdfs: [
      { label: "Inteligência de Negócio", file: "/inteligencia_negocios.pdf" },
    ],
    narrative: {
      problem: "Empresa de crédito com 77 mil cobranças históricas precisava identificar, com antecedência, quais clientes teriam maior probabilidade de atrasar o pagamento em 5 ou mais dias — sem ação proativa, o time de cobrança precisaria abordar 100% da base.",
      solution: "Pipeline completo com EDA, construção do target, engenharia de 29 features em 5 grupos (histórico comportamental, anomalias, cobrança atual, cadastral e info mensal) e modelo LightGBM treinado com validação Out-of-Time sobre 35 safras mensais. Todas as features históricas calculadas com shift(1) para garantir zero data leakage.",
      result: "AUC-ROC de 0.9542 e KS de 0.7877 na validação OOT. Abordando 20% da base de maior risco, o modelo captura 92.9% dos inadimplentes — protegendo R$ 59M em volume financeiro com uma fração do esforço operacional."
    },
    link: "https://github.com/arthurlins7/Modelo-preditivo-de-inadimplencia.git"
  },
];

export const experience = [
  {
    company: "Gummy Original",
    role: "Estagiário de BI e Operações",
    period: "2024 — 2025 · +1 ano",
    bullets: [
      "Automação do controle de Supply Chain, eliminando processos manuais recorrentes em planilhas Excel.",
      "Desenvolvimento de scripts em TypeScript para integração e transformação de dados operacionais.",
      "Criação de dashboards em Power BI para tomada de decisão da diretoria (CEO/COO).",
    ]
  }
];

export const education = [
  {
    institution: "CESAR School",
    degree: "Bacharelado em Ciência da Computação",
    period: "2021 — Atual",
    note: "Foco em Data Science e Machine Learning."
  },
  {
    institution: "ILAC International College",
    degree: "Diploma em Service Essentials for Business",
    period: "Toronto, Canadá",
    note: "Vivência internacional · Inglês Full Professional."
  }
];

export const skills = [
  {
    category: "Data Science & ML",
    items: ["Python", "Scikit-Learn", "XGBoost", "TensorFlow / Keras", "LSTM", "SMOTE", "NLP", "SVR"]
  },
  {
    category: "Análise & BI",
    items: ["Pandas", "Power BI", "Análise Exploratória", "Engenharia de Features", "SQL"]
  },
  {
    category: "Desenvolvimento",
    items: ["React", "JavaScript", "TypeScript", "HTML / CSS", "Git", "REST APIs"]
  }
];
