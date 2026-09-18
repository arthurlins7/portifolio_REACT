export const projects = [
  {
    title: "Machine Learning em Municípios do Nordeste",
    titleEn: "Machine Learning in Northeast Brazil Municipalities",
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
    en: {
      description: "Application of Machine Learning Techniques for Identifying Municipalities in Northeast Brazil with the Greatest Potential for Investment Attraction Based on Socioeconomic Data",
      narrative: {
        problem: "The difficulty in evaluating and cross-referencing dispersed socioeconomic indicators to identify which municipalities in Northeast Brazil present the greatest potential for investment and development.",
        solution: "Development of a data pipeline with feature engineering and supervised Machine Learning model training to map the municipalities' landscape.",
        result: "The model delivered robust performance metrics in GDP per capita assessment, demonstrating high generalization capacity to assist public agents and investors in decision-making."
      }
    },
    link: "https://github.com/arthurlins7/Machine-Learning-aplicado-a-munic-pios-do-Nordeste.git"
  },
  {
    title: "GeekCommerce Segments",
    titleEn: "GeekCommerce Segments",
    description: "Pipeline end-to-end de segmentação de clientes com RFM + K-Means, playbook de campanhas com impacto financeiro estimado e dashboard interativo com deploy em produção.",
    stack: "Python, Scikit-Learn, FastAPI, Next.js, Clustering, RFM",
    image: "",
    narrative: {
      problem: "E-commerces acumulam milhões de transações sem saber quem são seus clientes de verdade — quais estão prestes a sair, quais podem gastar mais, quais já foram perdidos. Sem segmentação, campanhas de marketing são genéricas e desperdiçam orçamento.",
      solution: "ETL sobre 1M+ transações reais (UCI Online Retail II), cálculo de scores RFM com normalização logarítmica, clustering K-Means com seleção de k via Elbow Method e Silhouette Score. Cada cluster foi traduzido em uma persona de negócio com ação, métrica de sucesso e impacto financeiro estimado.",
      result: "5.878 clientes segmentados em 4 personas. £2,7M de potencial incremental identificado sobre £17,7M de faturamento histórico."
    },
    en: {
      description: "End-to-end customer segmentation pipeline with RFM + K-Means, campaign playbook with estimated financial impact and interactive dashboard deployed in production.",
      narrative: {
        problem: "E-commerces accumulate millions of transactions without knowing who their real customers are — which ones are about to churn, which can spend more, which are already lost. Without segmentation, marketing campaigns are generic and waste budget.",
        solution: "ETL over 1M+ real transactions (UCI Online Retail II), RFM score calculation with logarithmic normalization, K-Means clustering with k selection via Elbow Method and Silhouette Score. Each cluster was translated into a business persona with action, success metric and estimated financial impact.",
        result: "5,878 customers segmented into 4 personas. £2.7M incremental potential identified over £17.7M in historical revenue."
      }
    },
    link: "https://github.com/arthurlins7/GeekCommerce-Segments",
    dashboard: "https://geek-commerce-segments.vercel.app"
  },
  {
    title: "NBA Performance Signals",
    titleEn: "NBA Performance Signals",
    description: "Pipeline end-to-end de detecção de anomalias de performance na NBA — identifica automaticamente quando jogadores estão abaixo do esperado e entrega um feed diário de alertas com deploy em produção e atualização automática.",
    stack: "Python, FastAPI, Next.js, PostgreSQL, Anomaly Detection, NBA API",
    image: "",
    narrative: {
      problem: "Times de analytics esportivos precisam identificar rapidamente quando um jogador está em queda de rendimento — seja em todas as métricas ou em uma dimensão específica. Fazer isso manualmente para centenas de jogadores por noite é inviável.",
      solution: "Pipeline completo com 5 temporadas de boxscores da NBA via nba_api. Z-Score calculado por baseline acumulado da temporada (com fallback para a temporada anterior), separando quedas globais de quedas isoladas por métrica. Atualização automática diária via GitHub Actions todo dia às 6h.",
      result: "Feed diário com dois tipos de alerta — queda global e queda isolada — com fotos dos jogadores, logos dos times via CDN oficial da NBA, MetricBars visuais mostrando cada métrica comparada à média da temporada e perfil histórico completo por jogador."
    },
    en: {
      description: "End-to-end performance anomaly detection pipeline for the NBA — automatically identifies when players are underperforming and delivers a daily alert feed with production deployment and automatic updates.",
      narrative: {
        problem: "Sports analytics teams need to quickly identify when a player is in performance decline — whether across all metrics or in a specific dimension. Doing this manually for hundreds of players per night is unfeasible.",
        solution: "Complete pipeline with 5 seasons of NBA boxscores via nba_api. Z-Score calculated by season accumulated baseline (with fallback to prior season), separating global drops from isolated metric drops. Daily automatic update via GitHub Actions every day at 6am.",
        result: "Daily feed with two alert types — global drop and isolated drop — with player photos, team logos via NBA's official CDN, visual MetricBars showing each metric compared to the season average and complete historical profile per player."
      }
    },
    link: "https://github.com/arthurlins7/NBA_Perfomance_Signals.git",
    dashboard: "https://nba-perfomance-signals.vercel.app"
  },
  {
    title: "Modelo Preditivo de Inadimplência",
    titleEn: "Default Prediction Model",
    description: "Pipeline end-to-end de predição de inadimplência em cobranças mensais — engenharia de features com histórico comportamental, validação Out-of-Time e inteligência de negócio acionável.",
    stack: "Python, LightGBM, Scikit-Learn, Pandas, Feature Engineering",
    image: "",
    narrative: {
      problem: "Empresa de crédito com 77 mil cobranças históricas precisava identificar, com antecedência, quais clientes teriam maior probabilidade de atrasar o pagamento em 5 ou mais dias — sem ação proativa, o time de cobrança precisaria abordar 100% da base.",
      solution: "Pipeline completo com EDA, construção do target, engenharia de 29 features em 5 grupos (histórico comportamental, anomalias, cobrança atual, cadastral e info mensal) e modelo LightGBM treinado com validação Out-of-Time sobre 35 safras mensais. Todas as features históricas calculadas com shift(1) para garantir zero data leakage.",
      result: "AUC-ROC de 0.9542 e KS de 0.7877 na validação OOT. Abordando 20% da base de maior risco, o modelo captura 92.9% dos inadimplentes — protegendo R$ 59M em volume financeiro com uma fração do esforço operacional."
    },
    en: {
      description: "End-to-end default prediction pipeline for monthly billings — feature engineering with behavioral history, Out-of-Time validation and actionable business intelligence.",
      narrative: {
        problem: "A credit company with 77K historical billings needed to identify in advance which customers would have the highest probability of delaying payment by 5 or more days — without proactive action, the collection team would need to approach 100% of the base.",
        solution: "Complete pipeline with EDA, target construction, engineering of 29 features across 5 groups (behavioral history, anomalies, current billing, profile and monthly info) and LightGBM model trained with Out-of-Time validation over 35 monthly vintages. All historical features calculated with shift(1) to guarantee zero data leakage.",
        result: "AUC-ROC of 0.9542 and KS of 0.7877 in OOT validation. By approaching 20% of the highest-risk base, the model captures 92.9% of defaulters — protecting R$59M in financial volume with a fraction of the operational effort."
      }
    },
    link: "https://github.com/arthurlins7/Modelo-preditivo-de-inadimplencia.git"
  },
  {
    title: "Detecção de Fraudes em Cartões de Crédito",
    titleEn: "Credit Card Fraud Detection",
    description: "Sistema de análise de anomalias para identificação de transações financeiras fraudulentas em cenários de Big Data.",
    stack: "Python, Análise de Dados, Machine Learning",
    image: "",
    narrative: {
      problem: "Instituições financeiras lidam com bases de dados massivas e precisam identificar anomalias transacionais em tempo hábil para evitar perdas milionárias com fraudes, minimizando falsos positivos.",
      solution: "Implementação de técnicas avançadas de análise exploratória e algoritmos de classificação em um contexto altamente desbalanceado de Big Data.",
      result: "O sistema conseguiu isolar transações fraudulentas com alta precisão (Recall otimizado), reduzindo consideravelmente a necessidade de análise humana manual."
    },
    en: {
      description: "Anomaly analysis system for identifying fraudulent financial transactions in Big Data scenarios.",
      narrative: {
        problem: "Financial institutions deal with massive databases and need to identify transactional anomalies in time to avoid million-dollar losses from fraud, minimizing false positives.",
        solution: "Implementation of advanced exploratory analysis techniques and classification algorithms in a highly imbalanced Big Data context.",
        result: "The system was able to isolate fraudulent transactions with high precision (optimized Recall), considerably reducing the need for manual human analysis."
      }
    },
    link: "https://github.com/Luscas-Fernandes/big-data-2025.2-CesarSchool.git"
  },
  {
    title: "Classificação de Sentimentos com Deep Learning",
    titleEn: "Sentiment Classification with Deep Learning",
    description: "Processamento de Linguagem Natural (NLP) aplicado à classificação de textos curtos em redes sociais utilizando arquitetura LSTM.",
    stack: "Python, TensorFlow/Keras, LSTM, NLP",
    image: "",
    narrative: {
      problem: "A ambiguidade, ironia e o volume massivo de textos informais em redes sociais dificultam a extração automatizada da percepção do público sobre determinados temas.",
      solution: "Construção de uma rede neural profunda com camadas LSTM (Long Short-Term Memory), capazes de reter o contexto sequencial das palavras e classificar a polaridade das frases.",
      result: "O modelo atingiu níveis elevados de acurácia em bases de testes reais, sendo capaz de distinguir nuances semânticas complexas em tweets de forma totalmente automatizada."
    },
    en: {
      description: "Natural Language Processing (NLP) applied to the classification of short texts on social media using LSTM architecture.",
      narrative: {
        problem: "Ambiguity, irony and the massive volume of informal texts on social media make it difficult to automatically extract public perception on certain topics.",
        solution: "Construction of a deep neural network with LSTM (Long Short-Term Memory) layers, capable of retaining the sequential context of words and classifying the polarity of sentences.",
        result: "The model achieved high accuracy levels on real test datasets, being able to distinguish complex semantic nuances in tweets in a fully automated manner."
      }
    },
    link: "https://github.com/arthurlins7/DeepLearning_TweetsClassification.git"
  },
  {
    title: "Previsão de Demanda: Bike Sharing",
    titleEn: "Demand Forecasting: Bike Sharing",
    description: "Análise preditiva de aluguel de bicicletas utilizando modelos de regressão para otimização de frota.",
    stack: "Python, Scikit-Learn, SVR, Pandas",
    image: "",
    narrative: {
      problem: "Prever a demanda de aluguel para garantir frota disponível nas estações e evitar tanto excesso quanto escassez de bicicletas.",
      solution: "Teste comparativo de múltiplos modelos de regressão. O SVR (Support Vector Regression) se destacou, entregando as melhores métricas de precisão frente aos demais algoritmos avaliados.",
      result: null
    },
    en: {
      description: "Predictive analysis of bicycle rental using regression models for fleet optimization.",
      narrative: {
        problem: "Predict rental demand to ensure fleet availability at stations and avoid both excess and shortage of bicycles.",
        solution: "Comparative testing of multiple regression models. SVR (Support Vector Regression) stood out, delivering the best precision metrics against the other evaluated algorithms.",
        result: null
      }
    },
    link: "https://github.com/arthurlins7/Bike_sharing.git"
  },
  {
    title: "Previsão de Casos de Sífilis Congênita",
    titleEn: "Congenital Syphilis Cases Forecasting",
    description: "Pipeline de dados com impacto social na saúde pública usando dados do DataSUS.",
    stack: "Python, Machine Learning, SMOTE, Pandas",
    image: "",
    narrative: {
      problem: "Dados do sistema de saúde pública são altamente desbalanceados, o que prejudica a capacidade dos modelos de aprender sobre as classes minoritárias (casos positivos).",
      solution: "Uso de SMOTE (Synthetic Minority Over-sampling Technique) para balancear as classes e permitir que o modelo aprendesse os padrões das ocorrências com eficácia.",
      result: null
    },
    en: {
      description: "Data pipeline with social impact in public health using DataSUS data.",
      narrative: {
        problem: "Public health system data is highly imbalanced, which impairs models' ability to learn about minority classes (positive cases).",
        solution: "Use of SMOTE (Synthetic Minority Over-sampling Technique) to balance classes and allow the model to learn occurrence patterns effectively.",
        result: null
      }
    },
    link: ""
  },
];

export const experience = [
  {
    company: "Instituto Atlântico",
    role: "Estagiário em Ciência de Dados",
    roleEn: "Data Science Intern",
    location: "Fortaleza, CE · Remoto",
    locationEn: "Fortaleza, CE · Remote",
    period: "Mai 2026 — Presente",
    periodEn: "May 2026 — Present",
    bullets: [
      "Condução de análises descritivas, univariadas e multivariadas de bases de dados utilizando PySpark no Databricks.",
      "Desenvolvimento de notebooks e scripts Python reutilizáveis para automação de análises estatísticas e geração de visualizações em séries temporais.",
      "Identificação e documentação de problemas de qualidade de dados, como anomalias em sensores e gaps temporais, com proposição de tratamentos para etapas de pré-processamento.",
      "Desenvolvimento de casos de uso integrando ciência de dados e regras de engenharia para validar o comportamento físico de ativos, calcular métricas preditivas de falhas e modelar limites de segurança para relatórios técnicos e dashboards de apoio à decisão.",
    ],
    bulletsEn: [
      "Conduct of descriptive, univariate and multivariate analyses of datasets using PySpark on Databricks.",
      "Development of reusable Python notebooks and scripts for automating statistical analyses and generating time series visualizations.",
      "Identification and documentation of data quality issues such as sensor anomalies and temporal gaps, with proposed treatments for preprocessing stages.",
      "Development of use cases integrating data science and engineering rules to validate the physical behavior of assets, calculate predictive failure metrics and model safety limits for technical reports and decision-support dashboards.",
    ]
  },
  {
    company: "Gummy Original",
    role: "Estagiário de BI e Operações",
    roleEn: "BI & Operations Intern",
    period: "2024 — 2025 · +1 ano",
    periodEn: "2024 — 2025 · +1 year",
    bullets: [
      "Automação do controle de Supply Chain, eliminando processos manuais recorrentes em planilhas Excel.",
      "Desenvolvimento de scripts em TypeScript para integração e transformação de dados operacionais.",
      "Criação de dashboards em Power BI para tomada de decisão da diretoria (CEO/COO).",
    ],
    bulletsEn: [
      "Supply Chain control automation, eliminating recurring manual processes in Excel spreadsheets.",
      "Development of TypeScript scripts for integration and transformation of operational data.",
      "Creation of Power BI dashboards for executive decision-making (CEO/COO).",
    ]
  }
];

export const education = [
  {
    institution: "CESAR School",
    degree: "Bacharelado em Ciência da Computação",
    degreeEn: "Bachelor's in Computer Science",
    period: "2021 — Atual",
    periodEn: "2021 — Present",
    note: "Foco em Data Science e Machine Learning.",
    noteEn: "Focus on Data Science and Machine Learning."
  },
  {
    institution: "ILAC International College",
    degree: "Diploma em Service Essentials for Business",
    degreeEn: "Diploma in Service Essentials for Business",
    period: "Toronto, Canadá",
    periodEn: "Toronto, Canada",
    note: "Vivência internacional · Inglês Full Professional.",
    noteEn: "International experience · Full Professional English."
  }
];

export const skills = [
  {
    category: "Data Science & ML",
    categoryEn: "Data Science & ML",
    items: ["Python", "Scikit-Learn", "XGBoost", "TensorFlow / Keras", "LSTM", "SMOTE", "NLP", "SVR"]
  },
  {
    category: "Análise & BI",
    categoryEn: "Analysis & BI",
    items: ["Pandas", "Power BI", "Análise Exploratória", "Engenharia de Features", "SQL"]
  },
  {
    category: "Desenvolvimento",
    categoryEn: "Development",
    items: ["React", "JavaScript", "TypeScript", "HTML / CSS", "Git", "REST APIs"]
  }
];
