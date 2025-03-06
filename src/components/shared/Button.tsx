import React from 'react';
import { Button as UiButton } from '../ui/button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
		| null
		| undefined;
}

export default function Button({ children, ...props }: ButtonProps) {
	return <UiButton {...props}>{children}</UiButton>;
}
