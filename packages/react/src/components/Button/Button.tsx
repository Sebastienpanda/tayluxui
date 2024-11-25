import type { ButtonProps } from '@/core/types/Button/button';

export const Button = ({ variant = 'primary', size = 'md', disabled = false }: ButtonProps) => {
	const baseClass = 'taylux-btn';
	const classes = [
		baseClass,
		`${baseClass}--${variant}`,
		`${baseClass}--${size}`,
		disabled ? `${baseClass}--disabled` : '',
	]
		.filter(Boolean)
		.join(' ');

	return <button className={classes}>ok</button>;
};
