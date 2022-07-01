import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

import pkg from './package.json'

export default[ 
    {
        input: 'src/index.tsx',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
                name: pkg.name
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        external: [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {})
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ 
                tsconfig: './tsconfig.json'
            }),
            terser()
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: pkg.types, format: "esm" }],
        plugins: [dts()]
    }
]