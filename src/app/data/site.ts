// TODO el contenido personal vive aquí. Lo marcado con [COMPLETAR] hay que sustituirlo.
export const site = {
  name: 'Marcos María Martínez Varas',
  role: 'Big Data · IA aplicada · IA generativa',
  tagline: 'Convierto datos en decisiones.',
  intro:
    'Técnico Superior en DAM con prácticas en Minsait (Indra Group). Ahora me especializo en Big Data, IA aplicada e IA generativa en U-tad, y estoy aprendiendo COBOL: me interesa tanto lo que se construye hoy como los sistemas que llevan décadas funcionando.',
  cv: 'Marcos_Maria_Martinez_Varas_BigData_IA.pdf',
  // Nombre con el que se guarda el CV al descargarlo
  cvFileName: 'Marcos_Maria_Martinez_Varas_BigData_IA.pdf',
  location: 'Madrid, España',
  seeking:
    'Busco prácticas o mi primer empleo en datos, IA o modernización de sistemas. En remoto, presencial o en otro país.',
  availability: 'Disponibilidad inmediata',
  email: 'mmartinezvaras@icloud.com',
  github: 'https://github.com/mmartinezvaras',
  linkedin: 'https://www.linkedin.com/in/marcos-mar%C3%ADa-mart%C3%ADnez-varas-b5156b3a3/',
  interests: [
    {
      title: 'Big Data',
      text: 'Pipelines, procesamiento de grandes volúmenes de datos y analítica que ayude a decidir.',
    },
    {
      title: 'IA',
      text: 'IA aplicada e IA generativa: usarla en problemas reales, no solo en demos.',
    },
    {
      title: 'COBOL',
      text: 'Sistemas heredados y mainframe: lo estoy aprendiendo para entenderlos y conectarlos con tecnologías actuales.',
    },
  ],
  education: [
    {
      period: '2026 – 2027',
      title: 'Máster en Big Data, IA aplicada e IA generativa',
      center: 'U-tad',
      current: true,
    },
    {
      period: '2024 – 2026',
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      center: 'IES Gonzalo Chacón',
      current: false,
    },
  ],
  experience: [
    {
      period: 'Mar – Jun 2026',
      title: 'Prácticas de tecnología · 4 meses',
      company: 'Minsait (Indra Group)',
      text: 'Trabajé dentro de un equipo de desarrollo profesional, con sus flujos de trabajo reales, aplicando lo aprendido en el ciclo DAM.',
    },
  ],
  certifications: [] as { title: string; issuer: string; year: string }[],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'C2 · LanguageCert' },
  ],
  extras: [
    'Disponibilidad inmediata',
    'Carnet de conducir',
    'Experiencia dirigiendo un equipo de fútbol: liderazgo y organización',
  ],
  skills: [
    {
      category: 'Big Data',
      items: [
        { name: 'Spark', learning: false },
        { name: 'Pandas', learning: false },
      ],
    },
    {
      category: 'IA generativa',
      items: [
        { name: 'LLMs', learning: false },
        { name: 'Prompting', learning: false },
        { name: 'RAG', learning: false },
        { name: 'ChromaDB', learning: false },
      ],
    },
    {
      category: 'Lenguajes y herramientas',
      items: [
        { name: 'Python', learning: false },
        { name: 'SQL', learning: false },
        { name: 'Java', learning: false },
        { name: 'TypeScript', learning: false },
        { name: 'Angular', learning: false },
        { name: 'Git', learning: false },
        { name: 'HTML', learning: false },
        { name: 'CSS', learning: false },
      ],
    },
    {
      category: 'Mainframe',
      items: [{ name: 'COBOL', learning: true }],
    },
  ],
};
