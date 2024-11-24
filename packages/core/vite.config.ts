import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'TayluxCore',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				assetFileNames: 'index.css',
			},
		},
		sourcemap: false,
		minify: true,
		cssMinify: true,
		cssCodeSplit: false,
	},
	plugins: [
		dts({
			include: ['src/**/*.ts'],
			outDir: 'dist/types',
			beforeWriteFile: (filePath, content) => {
				if (content.trim() === '') {
					return false;
				}
				return { filePath, content };
			},
		}),
	],
});
