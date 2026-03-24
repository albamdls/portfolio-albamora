export type CertificationStatus = "completed" | "in_progress" | "planned"

export type Certification = {
    title: string
    issuer: string
    code?: string
    status: CertificationStatus
    badgeSrc: string
    badgeAlt?: string
    skills?: string[]
    credentialUrl?: string
}

export const certifications: Certification[] = [
    {
        title: "AWS Certified Data Engineer – Associate",
        code: "DEA-C01",
        issuer: "Amazon Web Services",
        status: "in_progress",
        badgeSrc: "/badges/aws-dea-c01.webp",
        badgeAlt: "AWS Data Engineer Associate badge",
        skills: [
            "Data pipelines",
            "Glue",
            "Redshift",
            "S3 Data Lakes",
            "ETL processes",
            "Data governance",
            "Event-driven architectures",
        ],
    },
    {
        title: "AWS Certified Cloud Practitioner",
        code: "CLF-C02",
        issuer: "Amazon Web Services",
        status: "completed",
        badgeSrc: "/badges/aws-clf-c02.png",
        badgeAlt: "AWS Cloud Practitioner badge",
        skills: [
            "Cloud fundamentals",
            "IAM",
            "S3 / EC2 basics",
            "Pricing & Billing",
            "Well-Architected Framework",
            "Shared Responsibility Model",
        ],
    },
]