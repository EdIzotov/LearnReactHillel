import { withStyles, Button } from '@material-ui/core'

const StyledButton = withStyles(
    {
        containedPrimary: {
            border: '2px solid #fff',
            color: '#fff',
            backgroundColor: '#000'
        },
        containedSecondary: {
            border: '2px solid #aaa',
            color: '#aaa',
            backgroundColor: '#444'
        },
        outlinedPrimary: {
            border: '2px solid #fff',
            color: '#fff',
            backgroundColor: '#3f51b5',
            '&:hover': {
                border: '2px solid'
            }
        },
        outlinedSecondary: {
            border: '2px solid #aaa',
            color: '#aaa',
            backgroundColor: '#3f51b5',
            '&:hover': {
                border: '2px solid #aaa',
            }
        },
        colorInherit: {
            border: '2px solid #fff',
            margin: '5px',
            lineHeight: 1
        }
    }
)(Button)

export default StyledButton
