// Para añadir un proyecto: copia un bloque, cambia sus datos y listo. No hay que tocar componentes.
// Escribe pensando en alguien que no es técnico (por ejemplo, un reclutador de RRHH):
// - problem: el problema real en una frase sencilla. Es el titular del proyecto.
// - impact: qué consigue. Es lo único que va en el color de acento.
//     value: corto y llamativo ("1 de cada 2", "Cita la página"). label: lo explica en una frase.
//     Nunca inventes una cifra: si no la has medido, usa una frase cierta.
// - how: cómo funciona, en lenguaje llano.
// - tech: detalles técnicos para quien sí lo es (se muestran plegados). Explica cada término.
// - featured: true solo en UN proyecto, el principal.
// Entre un número y "%" pon un espacio que no se parte (Alt+0160) para que no se separen.
export type Area = 'IA generativa' | 'Big Data' | 'IA y ML' | 'Desarrollo';

export interface Project {
  slug: string;
  name: string;
  area: Area;
  status?: string;
  featured?: boolean;
  problem: string;
  impact: { value: string; label: string };
  how: string;
  tech: { title: string; text: string }[];
  stack: string[];
  repo: string;
  demo?: string;
}

export const areas: Area[] = ['IA generativa', 'Big Data', 'IA y ML', 'Desarrollo'];

export const projects: Project[] = [
  {
    slug: 'rag-pdfs',
    featured: true,
    name: 'Asistente para PDFs (RAG)',
    area: 'IA generativa',
    problem:
      'Buscar un dato en un documento largo obliga a leerlo entero, y un chatbot normal se inventa la respuesta.',
    impact: {
      value: 'Cita la página',
      label: 'Cada respuesta dice de qué documento y página sale, para que puedas comprobarla.',
    },
    how:
      'Parte los PDFs en trozos, los guarda en una base de datos que busca por significado (no por palabras exactas) y le pasa los 5 trozos más parecidos a una IA que se ejecuta en el propio ordenador. Esa IA solo puede responder con lo que dicen los documentos.',
    tech: [
      {
        title: 'Datos',
        text: 'PDFs de ejemplo (reglamentos de fútbol y de Fórmula 1) divididos en fragmentos de 800 caracteres que se solapan 80, para no cortar una idea por la mitad.',
      },
      {
        title: 'Búsqueda',
        text: 'Cada fragmento se convierte en una lista de números que representa su significado (embeddings de AWS Bedrock) y se guarda en ChromaDB. Al preguntar, se recuperan los 5 fragmentos más parecidos.',
      },
      {
        title: 'Respuesta',
        text: 'Mistral, ejecutado en local con Ollama, responde usando solo esos fragmentos e indica su origen (documento, página y fragmento). Al añadir PDFs nuevos solo se procesa lo nuevo, sin duplicados.',
      },
      {
        title: 'Pruebas',
        text: 'Tests con pytest en los que el propio modelo comprueba si la respuesta coincide con la esperada. Parte de un proyecto de referencia que adapté.',
      },
    ],
    stack: ['Python', 'LangChain', 'ChromaDB', 'AWS Bedrock', 'Ollama', 'Mistral', 'pytest'],
    repo: 'https://github.com/mmartinezvaras/Python-RAG-AI-para-los-PDFs',
  },
  {
    slug: 'retail-lakehouse',
    name: 'Pipeline de datos para retail',
    area: 'Big Data',
    problem:
      'Cuando una empresa compra otra, sus listas de clientes no encajan: hay duplicados, nombres mal escritos y ciudades con erratas.',
    impact: {
      value: 'Una sola lista fiable',
      label: 'Une los datos de las dos empresas en una base limpia, lista para sacar informes.',
    },
    how:
      'Trabaja en tres pasos: primero guarda los ficheros tal como llegan, para no perder nada; después los limpia, quitando duplicados y corrigiendo erratas; y por último los prepara para informes y los une con los de la empresa matriz.',
    tech: [
      {
        title: 'Paso 1 · Copia original',
        text: 'Capa Bronze: los CSV de clientes, productos y precios se guardan tal cual, con la hora y el fichero de origen, para poder rehacer cualquier paso.',
      },
      {
        title: 'Paso 2 · Limpieza',
        text: 'Capa Silver: elimina duplicados, quita espacios sobrantes, unifica el formato de los nombres y corrige ciudades mal escritas con correcciones validadas por negocio.',
      },
      {
        title: 'Paso 3 · Listo para informes',
        text: 'Capa Gold: tablas finales que se fusionan con las de la empresa matriz con un MERGE de Delta Lake, que actualiza lo que ya existe y añade lo nuevo.',
      },
      {
        title: 'Plataforma',
        text: 'Databricks con PySpark y Spark SQL, tablas Delta Lake y Unity Catalog para organizar los datos por capas.',
      },
    ],
    stack: ['Databricks', 'PySpark', 'Spark SQL', 'Delta Lake', 'Unity Catalog'],
    repo: 'https://github.com/mmartinezvaras/retail-big-data-pipeline',
  },
  {
    slug: 'ml-partidos',
    name: 'Predicción de partidos de La Liga',
    area: 'IA y ML',
    problem: 'Predecir quién gana un partido de fútbol es difícil: hay mucho azar.',
    impact: {
      value: '1 de cada 2',
      label: 'Cuando predice que un equipo ganará, acierta la mitad de las veces. Al azar serían menos de 4 de cada 10.',
    },
    how:
      'Aprende de 760 resultados de La Liga 2025-26. Se entrena con los partidos hasta diciembre y se pone a prueba con los de 2026, como si no los conociera. Lo que más le ayudó fue saber cómo había jugado cada equipo en sus 3 últimos partidos.',
    tech: [
      {
        title: 'Datos',
        text: '760 registros (uno por equipo y partido) con goles, tiros, tiros a puerta, faltas, córners y tarjetas.',
      },
      {
        title: 'Modelo',
        text: 'Random Forest de scikit-learn con campo, rival, hora y día de la semana como variables. Entrenamiento hasta diciembre de 2025 y prueba con 2026, sin usar datos del futuro.',
      },
      {
        title: 'Mejora clave',
        text: 'Añadir la media de los 3 partidos anteriores de cada equipo subió la precisión al predecir victorias del 46,4 % al 51,5 %.',
      },
      {
        title: 'Cómo leer el dato',
        text: 'La precisión mide cuántas de sus predicciones de victoria se cumplen. En los partidos de prueba solo el 38 % fueron victorias, así que acertar el 51,5 % es una mejora real sobre el azar.',
      },
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'Jupyter'],
    repo: 'https://github.com/mmartinezvaras/MLpartidosPremier',
  },
  {
    slug: 'banking-lakehouse',
    name: 'Banco simulado con PySpark',
    area: 'Big Data',
    status: 'En desarrollo',
    problem:
      'Los bancos tienen que detectar movimientos sospechosos, pero los datos de clientes reales son privados y no se pueden usar para practicar.',
    impact: {
      value: '0 datos reales',
      label: 'Crea un banco ficticio con clientes y movimientos inventados, sin poner en riesgo la privacidad de nadie.',
    },
    how:
      'Un programa genera los clientes y sus movimientos, y cada cambio en el código se comprueba automáticamente. El siguiente paso es avisar de patrones raros, como muchos pagos seguidos en poco tiempo.',
    tech: [
      {
        title: 'Hecho',
        text: 'Generador de datos sintéticos en Python, tests con pytest e integración continua con GitHub Actions (los tests se ejecutan solos en cada cambio).',
      },
      {
        title: 'Siguiente',
        text: 'Ingesta y limpieza con PySpark, almacenamiento en Parquet particionado y tablas Delta Lake.',
      },
      {
        title: 'Detección de fraude',
        text: 'Reglas con funciones de ventana, que comparan cada movimiento con los anteriores del mismo cliente (lag/lead y totales acumulados).',
      },
    ],
    stack: ['Python', 'PySpark', 'Parquet', 'Delta Lake', 'pytest', 'GitHub Actions'],
    repo: 'https://github.com/mmartinezvaras/banking-lakehouse-pyspark',
  },
  {
    slug: 'nosql-financiero',
    name: 'Base de datos bancaria en la nube',
    area: 'Big Data',
    problem: 'Un banco necesita consultar al momento los saldos y movimientos de sus clientes.',
    impact: {
      value: 'Saldo medio en una consulta',
      label: 'Calcula indicadores como el saldo medio por tipo de cuenta de una sola vez, sin recorrer cliente a cliente.',
    },
    how:
      'Guarda cada cliente como una ficha con sus cuentas y movimientos dentro, en una base de datos en la nube, y usa índices (como el índice de un libro) para encontrar cuentas rápido.',
    tech: [
      {
        title: 'Modelo de datos',
        text: 'Documentos JSON en MongoDB Atlas con las cuentas y las transacciones embebidas. Los movimientos nuevos se añaden con $push.',
      },
      {
        title: 'Consultas',
        text: 'Filtros por rango de saldo e índices simples y compuestos para acelerar las búsquedas.',
      },
      {
        title: 'Agregaciones',
        text: 'Pipeline de varias etapas ($match, $group y $sort) para obtener saldos medios e indicadores financieros.',
      },
    ],
    stack: ['Python', 'PyMongo', 'MongoDB Atlas', 'Google Colab'],
    repo: 'https://github.com/mmartinezvaras/nosql-financial-engine',
  },
  {
    slug: 'reconocimiento-facial',
    name: 'Asistencia con reconocimiento facial',
    area: 'IA y ML',
    problem: 'Pasar lista a mano lleva tiempo y es fácil de falsear.',
    impact: {
      value: 'Basta con mirar a la cámara',
      label: 'Registra quién ha llegado y a qué hora, una sola vez al día por persona.',
    },
    how:
      'Compara cada cara con las fotos de las personas registradas y apunta el nombre y la hora en una hoja de cálculo diaria. La hoja se consulta en una web que no la sube a ningún servidor.',
    tech: [
      {
        title: 'Reconocimiento',
        text: 'OpenCV captura el vídeo de la cámara y face_recognition compara cada cara con las imágenes registradas.',
      },
      {
        title: 'Registro',
        text: 'Un CSV por día con nombre y hora, con un solo registro por persona aunque pase varias veces por la cámara.',
      },
      {
        title: 'Visor',
        text: 'Una web en Angular abre el CSV y lo procesa solo en el navegador, sin enviarlo a ningún servidor.',
      },
    ],
    stack: ['Python', 'OpenCV', 'face_recognition', 'Angular'],
    repo: 'https://github.com/mmartinezvaras/Reconocimiento_Facial',
  },
  {
    slug: 'tfg-restaurante',
    name: 'App de pedidos para restaurante (TFG)',
    area: 'Desarrollo',
    problem: 'En un restaurante lleno, esperar para pedir y para pagar es lo que más molesta.',
    impact: {
      value: 'Pide y paga sin esperar',
      label: 'El cliente pide desde la web, paga todo junto o por separado, y el camarero valida el pago con un código QR.',
    },
    how:
      'Una web en la que el cliente entra con su nombre, elige del menú, revisa su pedido y paga. Por detrás, un servidor guarda salas, mesas, productos y pedidos en una base de datos.',
    tech: [
      {
        title: 'Web',
        text: 'Angular 21 con renderizado en servidor: menú por categorías con buscador, carrito, pago y factura en PDF.',
      },
      {
        title: 'Servidor',
        text: 'API REST en Spring Boot (Java) organizada por capas: controladores, servicios y repositorios.',
      },
      {
        title: 'Datos',
        text: 'Base de datos MySQL con salas, mesas, productos, pedidos y usuarios, gestionada con Spring Data JPA.',
      },
    ],
    stack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'MySQL'],
    repo: 'https://github.com/mmartinezvaras/TFGangular',
  },
  {
    slug: 'gestion-reventa',
    name: 'Panel de gestión para reventa',
    area: 'Desarrollo',
    problem:
      'Si compras y revendes productos, controlar el stock y saber cuánto ganas con cada uno en hojas sueltas es un caos.',
    impact: {
      value: 'Margen por producto',
      label: 'Un panel muestra el stock, las ventas y cuánto ganas con cada producto.',
    },
    how:
      'Una web para dar de alta productos, tiendas y ventas, conectada a un servidor que comprueba los datos antes de guardarlos para evitar errores.',
    tech: [
      {
        title: 'Servidor',
        text: 'Spring Boot por capas (controladores, servicios, repositorios, DTO y mappers), con validación de datos y gestión de errores.',
      },
      {
        title: 'Web',
        text: 'Angular con PrimeNG, formularios reactivos y TypeScript estricto.',
      },
      {
        title: 'Datos',
        text: 'Base de datos MySQL con datos de ejemplo para empezar.',
      },
    ],
    stack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'MySQL', 'Angular', 'PrimeNG'],
    repo: 'https://github.com/mmartinezvaras/consolaAdminProductos',
  },
];
