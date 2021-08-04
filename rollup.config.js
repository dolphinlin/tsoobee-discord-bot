import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    typescript({
      moduleResolution: 'node',
      baseUrl: './',
      paths: {
        '@/*': ['src/*'],
      },
    }),
  ],
};
