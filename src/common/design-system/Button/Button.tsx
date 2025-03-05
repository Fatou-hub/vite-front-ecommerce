import type { ReactElement } from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

type Props = {
    children: ButtonProps['children'];
    variant?: ButtonProps['variant'];
    type?: ButtonProps['type'];
    disabled?: ButtonProps['disabled'];
    onClick: ButtonProps['onClick'];
    color?: string; // Ajout de la prop color ici
}

const Button = ({ children, variant = 'text', type = 'button', disabled = false, onClick, color='#00a3a3' }: Props):
    ReactElement => {
    return (
        <MuiButton
            variant={variant}
            fullWidth
            type={type}
            disabled={disabled}
            onClick={onClick}
            sx={{
                backgroundColor: color, // Custom background color
                color: 'white', // You can adjust the text color here as well
                '&:hover': {
                    backgroundColor: `${color}99`, // Lighter color on hover
                },
            }}>
            {children}
        </MuiButton>
    );
};

export default Button;