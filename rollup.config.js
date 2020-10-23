import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/reporter.umd.js',
      format: 'umd',
      name: 'reporter',
      sourcemap: false,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist/'],
    }),
    nodeResolve(),
    commonjs(),
    terser({
      ecma: 2019,
      // This will ensure that whenever Rollup is in watch (dev) mode, console logs will not be removed
      compress: { drop_console: !Reflect.has(process.env, 'ROLLUP_WATCH') },
      format: { comments: false },
    }),
  ],
};
