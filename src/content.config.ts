import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/* =============================================
   OBRAS
   ============================================= */
const obras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
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
