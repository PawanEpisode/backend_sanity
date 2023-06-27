import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import works from './schemas/works'
import testimonials from './schemas/testimonials'
import brands from './schemas/brands'
import abouts from './schemas/abouts'
import experiences from './schemas/experiences'
import skills from './schemas/skills'
import workExperience from './schemas/workExperience'
import contact from './schemas/contact'

export default defineConfig({
  name: 'default',
  title: 'Pawan_Portfolio',

  projectId: 'zauu74ln',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [works, testimonials, brands, abouts, skills, workExperience, experiences, contact],
  },
})
