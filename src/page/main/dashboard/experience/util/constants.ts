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
    {Company:COMPANIES.CWN, JobTitle: "Full Stack Engineer", Location: "Atlanta, GA (HYBRID)" ,Years: "Feb 2024 - June 2024"}, 
    {Company:COMPANIES.UOR, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "Aug 2023 - Feb 2024"}, 
    {Company:COMPANIES.IBM, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Feb 2022 -  Aug 2023"}, 
    {Company:COMPANIES.SBD, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Oct 2020 - Feb 2022"}, 
    {Company:COMPANIES.ITG, JobTitle: "Full Stack Developer", Location: "Piscataway, NJ" ,Years: "June 2018 - Oct 2020"}, 
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
        "Built and owned a risk management system used by internal teams to evaluate and manage consumer credit risk.",
        "Identified and resolved performance bottlenecks across caching, service communication, and database access to improve system stability and responsiveness."
    ],
    [COMPANIES.CWN]: [
        "Developed and maintained customer-facing features across multiple web applications serving 40K+ daily users.",
        "Improved development speed and application stability by modernizing legacy code and expanding automated test coverage."
    ],
    [COMPANIES.UOR]: [
        "Built application features supporting guest experiences, ticketing, and group-based services for high-traffic consumer platforms.",
        "Worked closely with product and design teams to improve usability, performance, and reliability across customer-facing applications."
    ],
    [COMPANIES.IBM]: [
        "Developed enterprise incentive and claims management features as part of a large-scale modernization initiative.",
        "Led migration of tens of thousands of enterprise records to next-generation systems, implementing approval and workflow logic used across partner ecosystems."
    ],
    [COMPANIES.SBD]: [
        "Built a manufacturing analytics platform to improve operational visibility and streamline claims processing workflows.",
        "Designed and maintained data models and APIs supporting large-scale data collection and reporting."
    ],
    [COMPANIES.ITG]: [
        "Developed internal management and multi-tenant applications supporting employee tracking and enterprise workflows."
    ]
}
