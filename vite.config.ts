import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { UserConfig, defineConfig } from 'vite';

const config = <UserConfig>defineConfig({
	plugins: [vue()],
	server: {
		host: 'localhost',
		port: 3000
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "./src/styles/global.scss" as *;`
			}
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});

export default config;
