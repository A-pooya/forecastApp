import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
         alignItems:"flex-start",
         justifyContent:"center",
        backgroundColor:"black",
        borderRadius:"0.5rem"
    },
    apiBtn:{
        height:"2rem",
        border:"none",
        borderRadius:"0.7rem",
        margin:"0.5rem  0.5rem",
        backgroundColor:"#424242",
        "&:hover":{backgroundColor:"#f1f1f1"},
        color:"#ccc",
        cursor:"pointer"

    },
    cityInput:{
        borderRadius:"0.4rem",
        backgroundColor:"#424242"
    },
    TG:{
        color:"#ccc",
        marginLeft:"1rem",
        fontSize:'0.9rem' 
    }

})