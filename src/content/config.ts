import { defineCollection, z } from 'astro:content';

/* =============================================
   OBRAS
   ============================================= */
const obras = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    año: z.string(),
    lugar: z.string(),
    tecnica: z.string(),
    dimensiones: z.string().optional(),
    color: z.enum(['lime', 'magenta', 'yellow', 'violet', 'ink', 'paper']),
    span: z.number().min(1).max(12).default(6),
    categoria: z.enum(['mural', 'lienzo', 'digital']),
    imagen: z.string().optional(), // ruta relativa a public/
    descripcion: z.string().optional(),
    destacada: z.boolean().default(false),
    orden: z.number().default(99),
  }),
});

/* =============================================
   PRODUCTOS
   ============================================= */
const productos = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    categoria: z.string(),
    tamaño: z.string(),
    año: z.union([z.string(), z.number()]).transform(String),
    precio: z.string(),
    color: z.enum(['lime', 'magenta', 'yellow', 'violet', 'ink', 'paper']),
    estado: z.enum(['disp', 'reserved', 'open']),
    imagen: z.string().optional(),
    descripcion: z.string().optional(),
  }),
});

/* =============================================
   CURSOS
   ============================================= */
const cursos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    dia: z.string(),
    dayCls: z.enum(['lun', 'mar', 'mie', 'jue', 'vie']),
    audiencia: z.string(),
    horario: z.string(),
    duracion: z.string(),
    precio: z.string(),
    modo: z.string(),
    nivel: z.string(),
    starts: z.string(), // "YYYY-MM-DD"
    summary: z.string(),
    desc: z.array(z.string()),
    learn: z.array(z.string()),
    materials: z.array(z.string()),
  }),
});

/* =============================================
   BLOG
   ============================================= */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Laurel.gfk'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { obras, productos, cursos, blog };
