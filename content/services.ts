import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "ai-websites",
    name: "Páginas web con IA",
    shortDescription:
      "Sitios profesionales, rápidos de armar y fáciles de mantener.",
    description:
      "Diseñamos y desarrollamos la web de tu negocio usando herramientas de IA para acelerar el proceso, sin resignar un diseño a medida ni la calidad de un desarrollo profesional.",
    bullets: [
      "Diseño adaptado a tu marca y a tu rubro",
      "Optimizada para que te encuentren en Google",
      "Lista para usar desde el celular",
      "Entrega rápida",
    ],
  },
  {
    slug: "whatsapp-automation",
    name: "Automatización por WhatsApp",
    shortDescription: "Un asistente que responde y atiende consultas por vos.",
    description:
      "Implementamos un bot de WhatsApp para que tu negocio pueda responder consultas, tomar pedidos o agendar turnos automáticamente, las 24 horas del día.",
    bullets: [
      "Respuestas automáticas a las consultas más frecuentes",
      "Toma de pedidos o reservas sin intervención manual",
      "Integrado a WhatsApp Business",
      "Vos seguís teniendo el control de la conversación cuando lo necesitás",
    ],
  },
  {
    slug: "custom-development",
    name: "Desarrollo a medida",
    shortDescription: "Cuando lo que necesitás no entra en un paquete cerrado.",
    description:
      "Para negocios con necesidades más específicas: sistemas internos, integraciones, catálogos, o cualquier herramienta digital hecha a medida de cómo trabajás.",
    bullets: [
      "Relevamiento de lo que tu negocio realmente necesita",
      "Desarrollo enfocado en resolver el problema, no en vender de más",
      "Acompañamiento después de la entrega",
    ],
  },
];
