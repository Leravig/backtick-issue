import { Alert as MuiAlert} from '@mui/material'
import {ComponentProps, FunctionComponent} from 'react'

export const Alert : FunctionComponent<
    {
        children?: ComponentProps<typeof MuiAlert>[`children`]
        severity?: ComponentProps<typeof MuiAlert>[`severity`]
    }
> = ({
         severity = `info`,
         ...props
     }) => (
    <MuiAlert
        {...props}
        severity={severity}
    />
)
