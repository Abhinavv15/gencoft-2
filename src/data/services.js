import mobileSrc from '../assets/service_mobile.png'
import webSrc from '../assets/service_web.png'
import secSrc from '../assets/service_security.png'
import cloudSrc from '../assets/service_cloud.png'
import aiSrc from '../assets/service_ai.png'
import sreSrc from '../assets/service_sre.png'

export const services = [
  {
    num: '01',
    name: 'MOBILE APP DEVELOPMENT',
    short: 'Mobile Apps',
    desc: 'High-performance Android & iOS apps built with the latest technologies.',
    image: mobileSrc,
    watermark: 'MOBILE',
  },
  {
    num: '02',
    name: 'WEB APP DEVELOPMENT',
    short: 'Web Apps',
    desc: 'Responsive and scalable web applications for modern businesses.',
    image: webSrc,
    watermark: 'WEB',
  },
  {
    num: '03',
    name: 'CLOUD SOLUTIONS',
    short: 'Cloud',
    desc: 'Scalable cloud infrastructure and deployment strategies built on AWS and leading platforms.',
    image: cloudSrc,
    watermark: 'CLOUD',
  },
  {
    num: '04',
    name: 'DEVOPS',
    short: 'DevOps',
    desc: 'Streamlined CI/CD pipelines, infrastructure-as-code, and automated delivery workflows.',
    image: secSrc,
    watermark: 'DEVOPS',
  },
  {
    num: '05',
    name: 'SRE — SITE RELIABILITY ENGINEERING',
    short: 'SRE',
    desc: 'Robust reliability frameworks, SLO/SLA monitoring, and incident management.',
    image: sreSrc,
    watermark: 'SRE',
  },
  {
    num: '06',
    name: 'AI AGENTS',
    short: 'AI Agents',
    desc: 'Custom AI agents and LLM-powered automation for complex workflows.',
    image: aiSrc,
    watermark: 'AI',
  },
]
