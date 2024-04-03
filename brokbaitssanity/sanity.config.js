import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'brokbaits_sanity',

  projectId: 'xsu91yf1',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  useCdn: false,

  schema: {
    types: schemaTypes,
  },
})
