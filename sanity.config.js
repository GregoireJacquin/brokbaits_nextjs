import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import products from "./sanity/schemas/project-schema";

const config = defineConfig({
    projectId: 'xsu91yf1',
    dataset: 'production',
    title: 'Brokbaits',
    apiVersion: '2023-07-24',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: [products]}
})
export default config;