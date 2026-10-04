// Para añadir un proyecto: copia un bloque, cambia sus datos y listo. No hay que tocar componentes.
export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repo: string;
  problem: string;
  data: string;
  approach: string;
  result: string;
  learnings: string;
}

export const projects: Project[] = [
  {
    slug: 'rag-pdfs',
    title: 'RAG sobre documentos PDF',
    summary:
      'Sistema RAG en Python para consultar documentos PDF, con base vectorial en Chroma, scripts para cargar y consultar los datos, y tests.',
    tags: ['Python', 'RAG', 'IA generativa', 'ChromaDB'],
    repo: 'https://github.com/mmartinezvaras/Python-RAG-AI-para-los-PDFs',
    problem: '[PENDIENTE: qué problema resuelve, en una o dos frases]',
    data: 'Documentos PDF de ejemplo almacenados en la carpeta data, indexados en una base vectorial Chroma.',
    approach:
      '[PENDIENTE: indica si partiste de un proyecto de referencia y qué adaptaste. Scripts del repo: populate_database.py, query_data.py, get_embedding_function.py.]',
    result: '[PENDIENTE: qué consigues, por ejemplo qué preguntas responde bien]',
    learnings: '[PENDIENTE: qué aprendiste]',
  },
  {
    slug: 'tfg-angular',
    title: 'Proyecto final DAM: aplicación con Angular',
    summary:
      'Aplicación web con Angular y backend propio, desarrollada como proyecto final del ciclo DAM.',
    tags: ['Angular', 'TypeScript', 'Backend'],
    repo: 'https://github.com/mmartinezvaras/TFGangular',
    problem: '[PENDIENTE: qué hace la aplicación. El repo incluye una presentación de un restaurante: confírmalo]',
    data: '[PENDIENTE: de dónde salen los datos y qué base de datos usa]',
    approach: 'Frontend en Angular 21 con un backend en la carpeta backend y proxy de desarrollo. [PENDIENTE: lenguaje del backend]',
    result: '[PENDIENTE: resultado y nota o valoración, si quieres mostrarla]',
    learnings: '[PENDIENTE: qué aprendiste]',
  },
  {
    slug: 'ml-partidos',
    title: 'Machine learning con partidos de fútbol',
    summary:
      'Proyecto de machine learning en un notebook de Python con datos de partidos de La Liga 2025-2026.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Jupyter'],
    repo: 'https://github.com/mmartinezvaras/MLpartidosPremier',
    problem: '[PENDIENTE: qué intentas predecir o analizar]',
    data: 'Fichero CSV con partidos de La Liga 2025-2026. [PENDIENTE: fuente de los datos]',
    approach: '[PENDIENTE: modelo y librerías usadas]',
    result: '[PENDIENTE: métrica obtenida, por ejemplo el porcentaje de acierto]',
    learnings: '[PENDIENTE: qué aprendiste]',
  },
];