import type { ReactElement } from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

type Props = {
    children: ButtonProps['children'];
    variant?: ButtonProps ['variant'];
    type?: ButtonProps['type'];
    disabled?: ButtonProps['disabled'];
    onClick: ButtonProps['onClick'];
}

const Button = ({ children, variant='text', type='button', disabled=false, onClick }: Props): 
    ReactElement => {
    return (
        <MuiButton variant={variant} type={type} disabled={disabled} onClick={onClick}>
            {children}
        </MuiButton>
    );
};

export default Button;