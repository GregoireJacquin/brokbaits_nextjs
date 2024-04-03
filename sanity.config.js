import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import products from "./sanity/schemas/project-schema";
import caroussel from "./sanity/schemas/caroussel-schema";

const config = defineConfig({
    projectId: 'xsu91yf1',
    dataset: 'production',
    title: 'Baikbaits',
    apiVersion: '2023-07-24',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: [products,caroussel]},
    useCdn: false,
})
export default config;