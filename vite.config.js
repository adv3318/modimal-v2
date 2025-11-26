import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import productsData from './src/data/products.json';
import collectionData1 from './src/partials/data/collection-01.json';
import collectionData2 from './src/partials/data/collection-02.json';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { imgToPicture } from '@atrocityz/vite-plugin-html-img-to-picture';
import path from 'path';

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: path.resolve(__dirname, 'src/partials'),
            context: {
                products: productsData,
                'collection-01': collectionData1,
                'collection-02': collectionData2,
            },
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/icons')],
            symbolId: 'icon-[name]',
            svgoOptions: {
                plugins: [
                    {
                        name: 'removeAttrs',
                        params: {
                            attrs: '(fill|stroke)',
                        },
                    },
                ],
            },
        }),
        imgToPicture({
            imgToPicture: false,
        }),
    ],
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: `@use '@/styles/helpers' as *;`,
                silenceDeprecations: ["legacy-js-api"],
            },
        },
    },
    resolve: {
        alias: [
            {
                find: "@/",
                replacement: path.resolve("src") + "/",
            },
        ],
    },
});
