enum COMPANIES {
    COB="Capital One",
    CWN="Cricket Wireless",
    UOR="Universal Orlando Resort",
    IBM="IBM",
    SBD= "Stanley Black and Decker",
    ITG= "Itlize Global LLC"
}
export const JOB_EXPERIENCE = [
    {Company:COMPANIES.COB, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "July 2024 - Present"}, 
    {Company:COMPANIES.CWN, JobTitle: "Full Stack Engineer", Location: "Atlanta, GA (HYBRID)" ,Years: "Feb 2024 - July 2024"}, 
    {Company:COMPANIES.UOR, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "Aug 2023 - Feb 2024"}, 
    {Company:COMPANIES.IBM, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Feb 2022 -  Aug 2023"}, 
    {Company:COMPANIES.SBD, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Oct 2020 - Feb 2022"}, 
    {Company:COMPANIES.ITG, JobTitle: "Full Stack Developer", Location: "Piscataway, NJ" ,Years: "June 2019 - Oct 2020"}, 
]
export const DESCRIBE_EXPEIENCE = {
    [COMPANIES.COB]: "Capital One is a financial services corporation specializing in consumer credit, retail banking, and risk management solutions. Worked as a Senior Software Engineer developing a risk management system from inception through production.",
    [COMPANIES.CWN]: "Cricket Wireless is an American wireless service provider offering affordable mobile communication services to millions of customers nationwide. Worked as a Full Stack Engineer developing and enhancing web applications and integrating backend services.",
    [COMPANIES.UOR]: "Universal Orlando Resort is a global entertainment and hospitality company focused on delivering immersive, family-friendly experiences. Developed application features supporting guest experiences, ticketing, and group-based services.",
    [COMPANIES.IBM]: "IBM is a multinational technology company providing enterprise software, cloud, and data solutions across multiple industries. Contributed to the development of claims and incentive management modules, supporting data validation, calculation, and processing for business partners..",
    [COMPANIES.SBD]: "Stanley Black & Decker is a global industrial and manufacturing company focused on tools, engineered products, and intelligent solutions. Worked on an AI-driven collaboration platform designed to identify continuous improvement opportunities and automate enterprise workflows",
    [COMPANIES.ITG]: "Itlize Global LLC is a technology consulting firm delivering enterprise application and data management solutions. Developed a full-stack platform for data processing, reporting, secure file storage, and role-based access control."
}

export const COMPANIES_POINTS = {
    [COMPANIES.COB]: [
        "Architected modular, reusable front-end components and Angular 18+/NgRx SPAs, enabling rapid delivery of new product variations on a shared platform.",
        "Designed and scaled enterprise platforms unifying resource and risk management workflows used across 10 business teams.",
        "Owned end-to-end performance and reliability; introduced observability and distributed tracing with Splunk and CloudWatch, improving overall system performance by 25%.",
        "Built Fastify/Node.js REST APIs on AWS Lambda with PostgreSQL, improving data-access performance by 20%.",
        "Building Playwright end-to-end test suites and integrating Claude Code into daily development workflows to speed up delivery."
    ],
    [COMPANIES.CWN]: [
        "Led migration of a legacy vanilla JavaScript codebase to React 18/TypeScript, cutting feature delivery time by 20-30%.",
        "Built customer-facing wearable features across 15+ pages serving 40K+ daily users.",
        "Expanded automated test coverage with Jest and Cypress and delivered WCAG-compliant accessibility, reducing production defects."
    ],
    [COMPANIES.UOR]: [
        "Built Node.js integrations powering React 17 and Angular 15 guest-facing apps with consistent API contracts.",
        "Built an event-driven Kafka processor with Node.js and Azure, scaling ticket throughput to 150+ per second during peak traffic."
    ],
    [COMPANIES.IBM]: [
        "Delivered core React 17+ platform features for a $3B ecosystem modernization initiative on a Spring Boot/Kubernetes microservices backend.",
        "Built dynamic forms, filters, and role-based permissions in React with IBM Carbon Design System, making complex incentive workflows accessible to non-technical partners.",
        "Led migration of 90K+ enterprise opportunities to next-generation incentive systems with automated TypeScript/Node.js pipelines."
    ],
    [COMPANIES.SBD]: [
        "Built a manufacturing analytics platform with React 17 and Node.js (plus legacy Vue.js components) and MSSQL, improving visibility and claims processing.",
        "Designed SQL data models and Node.js APIs supporting data collection and processing workflows."
    ],
    [COMPANIES.ITG]: [
        "Delivered internal and multi-tenant apps with React 16, Angular, and Node.js, including employee tracking, security, and role-based access."
    ]
}
