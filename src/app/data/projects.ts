// Para añadir un proyecto: copia un bloque, cambia sus datos y listo. No hay que tocar componentes.
// - headline: titular corto y potente (3-5 palabras).
// - value: una frase que explique qué aporta.
// - metric: el resultado más llamativo, en grande. value corto ("51 %", "3 capas"), label lo explica.
// - featured: true solo en UN proyecto, el principal.
// Lo marcado con [COMPLETAR] hay que sustituirlo.
export type Area = 'IA generativa' | 'Big Data' | 'IA y ML' | 'Desarrollo';

export interface Project {
  slug: string;
  headline: string;
  name: string;
  value: string;
  area: Area;
  metric: { value: string; label: string };
  stack: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
  status?: string;
  problem: string;
  data: string;
  approach: string;
  result: string;
  learnings: string;
}

export const areas: Area[] = ['IA generativa', 'Big Data', 'IA y ML', 'Desarrollo'];

export const projects: Project[] = [
  {
    slug: 'rag-pdfs',
    featured: true,
    headline: 'Pregunta a tus PDFs.',
    name: 'RAG sobre documentos PDF',
    value:
      'Un asistente que responde preguntas sobre documentos PDF usando solo su contenido, y dice de qué página sale cada respuesta.',
    area: 'IA generativa',
    metric: { value: '5', label: 'fuentes citadas en cada respuesta: documento, página y fragmento' },
    stack: ['Python', 'LangChain', 'ChromaDB', 'AWS Bedrock', 'Ollama · Mistral', 'pytest'],
    repo: 'https://github.com/mmartinezvaras/Python-RAG-AI-para-los-PDFs',
    problem:
      'Encontrar un dato concreto en PDFs largos obliga a leerlos enteros, y un LLM genérico no conoce su contenido o se lo inventa.',
    data:
      'PDFs de ejemplo (reglamentos de fútbol y de Fórmula 1). Se dividen en fragmentos de 800 caracteres con 80 de solapamiento y se indexan en una base vectorial Chroma.',
    approach:
      'Pipeline RAG con LangChain: carga con PyPDF, troceado con RecursiveCharacterTextSplitter, embeddings con AWS Bedrock (o nomic-embed-text en local con Ollama) y búsqueda por similitud en Chroma. Los 5 fragmentos más cercanos se pasan como contexto a Mistral, que se ejecuta en local con Ollama y solo puede responder con ese contexto. Partí de un proyecto de referencia: [COMPLETAR: cuál y qué adaptaste].',
    result:
      'Cada fragmento tiene un identificador estable (documento:página:fragmento), así que al añadir PDFs solo se indexa lo nuevo, sin duplicados, y cada respuesta indica de qué fragmentos sale. Incluye tests con pytest en los que el propio LLM evalúa si la respuesta coincide con la esperada. [COMPLETAR: porcentaje de acierto en tus pruebas]',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'retail-lakehouse',
    headline: 'Dos empresas, un solo dato.',
    name: 'Pipeline Big Data para retail',
    value:
      'Pipeline en Databricks que limpia los datos de una empresa filial y los integra con los de la matriz siguiendo la arquitectura medallion.',
    area: 'Big Data',
    metric: { value: '3 capas', label: 'Bronze → Silver → Gold, sobre tablas Delta en Unity Catalog' },
    stack: ['Databricks', 'PySpark', 'Delta Lake', 'Spark SQL', 'Unity Catalog'],
    repo: 'https://github.com/mmartinezvaras/retail-big-data-pipeline',
    problem:
      'Tras una adquisición, los datos de la filial llegan en CSV con duplicados, espacios sobrantes, ciudades mal escritas y valores nulos, y no se pueden analizar junto a los de la matriz.',
    data: 'Ficheros CSV de clientes, productos y precios de la filial, una empresa de gran consumo (FMCG), cargados en un volumen de Databricks.',
    approach:
      'Bronze: ingesta de los CSV tal cual, con la hora de lectura y el fichero de origen. Silver: eliminación de duplicados, limpieza de espacios, nombres normalizados y ciudades corregidas con un mapa de erratas y correcciones validadas por negocio. Gold: tablas dimensionales que se fusionan con las de la matriz mediante MERGE de Delta Lake.',
    result:
      'Dimensiones de clientes, productos y precios limpias y unificadas en el catálogo de la empresa matriz, listas para análisis. [COMPLETAR: registros procesados o duplicados eliminados]',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'ml-partidos',
    headline: 'Predecir quién gana.',
    name: 'Machine learning con partidos de La Liga',
    value: 'Un modelo que estima si un equipo de La Liga ganará su próximo partido a partir de su forma reciente.',
    area: 'IA y ML',
    metric: { value: '+5 pts', label: 'de precisión al añadir la forma de los 3 últimos partidos (46 % → 51 %)' },
    stack: ['Python', 'Pandas', 'scikit-learn', 'Random Forest', 'Jupyter'],
    repo: 'https://github.com/mmartinezvaras/MLpartidosPremier',
    problem:
      'Predecir el resultado de un partido de fútbol: un problema con tanto ruido que superar al azar ya es difícil.',
    data:
      '760 registros de La Liga 2025-2026 (uno por equipo y partido) con goles, tiros, tiros a puerta, faltas, córners y tarjetas. [COMPLETAR: fuente de los datos]',
    approach:
      'Codifiqué campo, rival, hora y día de la semana, y entrené un Random Forest con los partidos hasta diciembre de 2025 para probarlo con los de 2026, sin usar datos del futuro. Después añadí como variables las medias de los 3 partidos anteriores de cada equipo: goles, tiros, faltas y tarjetas.',
    result:
      'El modelo base acierta el 59,6 % de los resultados. Con las medias móviles, la precisión al predecir victorias sube del 46,4 % al 51,5 %.',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'banking-lakehouse',
    headline: 'Un banco, sin datos reales.',
    name: 'Banking Lakehouse con PySpark',
    value: 'Lakehouse con PySpark que genera transacciones bancarias simuladas para analizarlas y detectar fraude con reglas.',
    area: 'Big Data',
    status: 'En desarrollo',
    metric: { value: '0', label: 'datos reales de clientes: todo el dataset es sintético' },
    stack: ['Python', 'PySpark', 'Parquet', 'Delta Lake', 'pytest', 'GitHub Actions'],
    repo: 'https://github.com/mmartinezvaras/banking-lakehouse-pyspark',
    problem: 'Practicar ingeniería de datos bancaria sin poder usar datos de clientes, que son confidenciales.',
    data: 'Clientes y transacciones generados con un script propio.',
    approach:
      'Generador de datos con tests e integración continua en GitHub Actions. Siguientes pasos: ingesta y limpieza con PySpark, almacenamiento en Parquet particionado, tablas Delta Lake y detección de fraude con funciones de ventana (lag/lead y totales acumulados).',
    result: 'En desarrollo: ya funcionan el generador de datos, los tests y la integración continua.',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'nosql-financiero',
    headline: 'Banca en documentos.',
    name: 'Motor NoSQL financiero',
    value: 'Motor NoSQL en MongoDB Atlas para gestionar cuentas, procesar transacciones y calcular métricas financieras desde Python.',
    area: 'Big Data',
    metric: { value: 'Cloud', label: 'MongoDB Atlas desplegado en AWS y consultado desde Python' },
    stack: ['Python', 'PyMongo', 'MongoDB Atlas', 'Google Colab'],
    repo: 'https://github.com/mmartinezvaras/nosql-financial-engine',
    problem:
      'Modelar datos bancarios de estructura flexible, como cuentas de distintos tipos con listas de transacciones, y consultarlos de forma eficiente.',
    data: 'Documentos JSON de clientes con saldos, tipos de cuenta y transacciones embebidas. [COMPLETAR: origen de los datos]',
    approach:
      'Documentos embebidos, consultas por rangos de saldo, índices simples y compuestos, transacciones añadidas con $push y pipelines de agregación ($match, $group, $sort) para obtener saldos medios e indicadores.',
    result: '[COMPLETAR: qué métricas obtuviste]',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'reconocimiento-facial',
    headline: 'Pasar lista con la cámara.',
    name: 'Sistema de reconocimiento facial',
    value:
      'Registra la asistencia reconociendo caras con la cámara y guarda quién llegó y a qué hora en un CSV que se consulta en un visor web.',
    area: 'IA y ML',
    metric: { value: '1', label: 'registro por persona y día, aunque pase varias veces por la cámara' },
    stack: ['Python', 'OpenCV', 'face_recognition', 'Angular'],
    repo: 'https://github.com/mmartinezvaras/Reconocimiento_Facial',
    problem: 'Pasar lista a mano es lento y fácil de falsear.',
    data: 'Fotos de las personas registradas y el vídeo en directo de la cámara.',
    approach:
      'OpenCV captura el vídeo y face_recognition compara cada cara con las imágenes registradas. Cada reconocimiento se guarda con nombre y hora en un CSV diario. Un visor en Angular abre el CSV y lo procesa solo en el navegador, sin subirlo a ningún servidor.',
    result: '[COMPLETAR: resultado]',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'tfg-restaurante',
    headline: 'Del menú al pago.',
    name: 'Proyecto final DAM: app para restaurante',
    value:
      'Aplicación web para un restaurante: menú, carrito, validación del pedido, pago y factura en PDF, con salas y mesas.',
    area: 'Desarrollo',
    metric: { value: 'Full stack', label: 'Angular con SSR, API REST en Spring Boot y base de datos MySQL' },
    stack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'MySQL'],
    repo: 'https://github.com/mmartinezvaras/TFGangular',
    problem: 'Digitalizar la toma de pedidos y el cobro de un restaurante.',
    data: 'Base de datos MySQL con salas, mesas, productos, pedidos y usuarios, gestionada con Spring Data JPA.',
    approach:
      'Frontend en Angular 21 con renderizado en servidor (SSR): menú, carrito, validación del pedido y pasarela de pago. Backend en Spring Boot con una API REST por capas (controladores, servicios y repositorios) y login.',
    result: 'Proyecto final del ciclo DAM. [COMPLETAR: nota o valoración, si quieres mostrarla]',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
  {
    slug: 'gestion-reventa',
    headline: 'Comprar, revender, medir.',
    name: 'Consola de gestión de reventa',
    value: 'Aplicación de gestión para un negocio de reventa: productos, tiendas, stock, ventas y rentabilidad en un panel.',
    area: 'Desarrollo',
    metric: { value: 'REST', label: 'API en Spring Boot por capas, con DTO, mappers y validación' },
    stack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'MySQL', 'Angular', 'PrimeNG'],
    repo: 'https://github.com/mmartinezvaras/consolaAdminProductos',
    problem: 'Llevar el control de compras, stock y márgenes de un negocio de reventa en un solo sitio.',
    data: 'Base de datos MySQL con datos iniciales de ejemplo.',
    approach:
      'Backend en Spring Boot por capas (controladores, servicios, repositorios, DTO, mappers y gestión de excepciones) con Bean Validation. Frontend en Angular con PrimeNG, formularios reactivos y TypeScript estricto.',
    result: '[COMPLETAR: resultado]',
    learnings: '[COMPLETAR: qué aprendiste]',
  },
];
