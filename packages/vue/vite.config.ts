import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		vue(),
		dts({
			include: ['src/**/*.ts', 'src/**/*.vue'],
			outDir: 'dist/types',
			cleanVueFileName: true,
			beforeWriteFile: (filePath, content) => {
				if (content.trim() === '') {
					return false;
				}
				return { filePath, content };
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'taylux',
			fileName: (format) => `taylux.${format}.js`,
		},
		sourcemap: false,
		minify: true,
		cssCodeSplit: false,
		cssMinify: true,
		rollupOptions: {
			external: ['vue'],
			output: [
				{
					format: 'es',
					exports: 'named',
					globals: {
						vue: 'Vue',
					},
					assetFileNames: 'assets/[name][extname]',
					preserveModulesRoot: 'src',
				},
				{
					format: 'umd',
					name: 'tailux',
					exports: 'named',
					globals: {
						vue: 'Vue',
					},
					assetFileNames: 'assets/[name][extname]',
				},
			],
		},
		reportCompressedSize: true,
		chunkSizeWarningLimit: 1000,
	},
});
