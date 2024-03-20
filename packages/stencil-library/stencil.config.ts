import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [tailwind(), tailwindHMR()],
};
