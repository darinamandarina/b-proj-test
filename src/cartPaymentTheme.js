const style = {
    payment:{
        border: "1px solid #70707047",
        borderRadius: "5px",
        background:'#FAFAFA 0% 0% no-repeat padding-box',
        width: "500px",
        height: "600px",
        margin: "0 30px",
        '& .items':{
            margin: "30px 70px 50px 60px",
            '& .payment_header':{
                marginBottom: "50px",
            },

            '& .payment_total':{
                textAlign: "end",
                position: "relative",
                top: "-31px"
            }
        },
        "& .btn-grp":{
            marginTop: "93px",
            display: "flex",
            justifyContent: "space-around",
        
        },
    },

    form:{  
        display:"flex",
        alignItems: "center",
        flexDirection: "column", 
        "& .form__cardname, .form__cardnum":{
            width: "348px",
        },
        "& .form__cardname":{
            margin:"8px 0"
        },
        "& .form__cardexp":{
            width: "196px",
            marginRight: "40px",
            margin:"8px 0"
        },   
        "& .form__cardcvv":{
            width: "112px",
            margin:"8px 0"
        },
    },
    button:{
        width: "220px"

    },
}
export default style