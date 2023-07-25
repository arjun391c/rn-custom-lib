import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import copy from 'rollup-plugin-copy'

import pkg from './package.json'

export default[ 
    {
        input: 'src/index.tsx',
        output: [
            {
                dir: "lib/cjs",
                format: 'cjs',
                sourcemap: true,
                preserveModules: true,
                exports: "named",
                name: pkg.name
            },
            {
                dir: "lib/esm",
                format: 'esm',
                sourcemap: true,
                preserveModules: true,
                exports: "named",
                name: pkg.name
            }
        ],
        external: [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {})
        ],
        plugins: [
            copy({
                targets: [
                  { src: ['src/assets/images/icons/*', '!**/*.ts'], dest: 'lib/cjs/assets/images/icons' },
                  { src: ['src/assets/images/icons/*', '!**/*.ts'], dest: 'lib/esm/assets/images/icons' },
                ],
            }),
            external(),
            resolve(),
            commonjs(),
            typescript({ 
                tsconfig: 'tsconfig.json',
                useTsconfigDeclarationDir: true
            }),
            terser(),
        ],
    },
    {
        input: "lib/types/index.d.ts",
        output: [{ file: 'lib/index.d.ts', format: "esm" }],
        plugins: [dts()]
    }
]