const style = {
    reciept:{
        display:"flex",
        padding:"0 115px",
        background: "#fff",
        flexDirection: "column",
        '& .reciept__body':{
            borderBottom: "1px solid #707070",
            display:"flex",
            justifyContent: "space-between",
            '& .customer':{
            
            },
            '& .company':{
            
            },
        },
        '& .reciept__head':{
            
        },
        
        '& .reciept__table':{
            '& .table__header':{
                display: "flex",
                borderBottom: "1px solid #707070",
                justifyContent: "space-between",
                padding: "0 256px 0 30px",
            },
            '& .table__body':{
                '& .body__element':{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 0 0 30px",
                    borderBottom: "1px solid #707070",
                },
                '& .body__total':{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "80%",
                    '& .totalAmount':{
                        '&:nth-child(1)':{
                            marginRight:"160px",
                        }
                    },
                },
            }
        },
        
    },
    tableItem:{
        '&:nth-child(1)':{
            width: "180px"
        },
        '&:nth-child(2)':{
            width: "105px"
        },
        '&:nth-child(3)':{
            width: "75px"
        },
        '&:nth-child(4)':{
            width: "50px"
        },
        '&:nth-child(5)':{
            width: "75px"
        },
    },
    

}
export default style
