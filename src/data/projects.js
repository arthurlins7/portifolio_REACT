export const projects = [
  {
    title: "Machine Learning em Municípios do Nordeste (TCC)",
    description: "Aplicação de modelos preditivos para análise socioeconômica e identificação de oportunidades de investimento.",
    stack: "Python, XGBoost, Scikit-Learn, Pandas",
    image: "", // Exemplo: "/assets/tcc-grafico.png"
    narrative: {
      problem: "A dificuldade em avaliar e cruzar indicadores socioeconômicos dispersos para identificar quais municípios do Nordeste apresentam maior potencial para investimentos e desenvolvimento.",
      solution: "Desenvolvimento de um pipeline de dados com engenharia de features e treinamento de modelos de Machine Learning supervisionados para mapear o cenário dos municípios.",
      result: "O modelo forneceu métricas de desempenho robustas na avaliação do PIB per capita, demonstrando alta capacidade de generalização para auxiliar agentes públicos e investidores na tomada de decisão."
    },
    link: "https://github.com/arthurlins7/Machine-Learning-aplicado-a-munic-pios-do-Nordeste.git"
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
    title: "Sistema de Solicitação de Serviços de TI",
    description: "Aplicação front-end baseada em componentes (SPA) para gerenciamento interativo de chamados de suporte técnico.",
    stack: "ReactJS, JavaScript, HTML, CSS",
    image: "",
    narrative: {
      problem: "A desorganização e lentidão no registro, acompanhamento e triagem de requisições de suporte técnico em ambientes corporativos afetam diretamente a produtividade.",
      solution: "Desenvolvimento de uma interface reativa que centraliza as solicitações e consome APIs, melhorando a fluidez na experiência do usuário final.",
      result: "A entrega de uma aplicação rápida, modular e livre de recarregamentos (Single Page Application), facilitando a escalabilidade para a equipe de infraestrutura."
    },
    link: "https://github.com/arthurlins7/Projeto_REACT.git"
  }
];