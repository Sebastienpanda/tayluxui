import type { App } from 'vue';
import '../../core/src/styles/index.scss';
import Button from './components/Button/Button.vue';

export { Button };

export const plugin = {
	install(app: App) {
		app.component('Button', Button);
	},
};

export default plugin;

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		Button: typeof Button;
	}
}
