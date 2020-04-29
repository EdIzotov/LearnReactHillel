import { withStyles, Button } from '@material-ui/core'

const StyledButton = withStyles(
    {
        root: {
            border: '2px solid #fff',
        }
    }
)(Button)

export default StyledButton
