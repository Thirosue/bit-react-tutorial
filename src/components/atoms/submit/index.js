import React from 'react';
import Button from '@material-ui/core/Button';

export default ({ processing, children, fullWidth = false, color = 'primary', className = '', onClick }) => {

    const handleSubmit = () => {
        if (processing) return
        onClick()
    }

    return (
        <Button
            fullWidth={fullWidth}
            disabled={processing}
            variant='contained'
            color={color}
            className={className}
            onClick={handleSubmit}
        >
            {!!children && (<>{children}</>)}
            {!children && (<>Confirm</>)}
        </Button>
    )
}
