const style = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 100px',
    },
    h1:{
        padding:'30px'
    },

    table:{  
        minWidth: 500,
        boxShadow: '0px 3px 6px #00000029',
        border: '1px solid #7070702E',
        borderRadius: '5px',
        background: '#FFF',

    },
    status:{
        display:'flex',
        flexDirection:'column'
    },
    date :{
        display:'flex',
        flexDirection:'column',
        '& .date__date':{
            fontWeight: 'bold'
        },

    },
    event:{
        display:'flex',
        flexDirection:'column',
        
    },
    row:{
        height:'107px',

        '& td:nth-child(1)':{
            padding: '0 0 0 32px'
        }

    },
    
}
export default style