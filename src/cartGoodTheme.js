const style = {
    cart:{
        background:"#fff",
        paddingLeft:"70px",

        '& .cartSystem':{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            '& .header':{
                margin:"30px 0",
                alignSelf: "flex-start",
            },
        },
    },
    cartElement__name:{
        margin:"30px 0",

    },
    cartElement:{
        display: "flex",
        justifyContent:"space-between",
    },
    cartElement__about:{
        display:"flex",
        flexFlow: "column wrap",
        height:'225px',
        width: "686px",
        boxSizing: "border-box",
        paddingBottom: "50px",
        marginTop: "30px",
        '&:nth-child(even)':{
            borderBottom: "1px solid #707070",
        },
        '& .item':{
            marginBottom: '10px',
            marginLeft: '30px'
        },
        '& .about__title':{
            order:2,
            width: "50%"
        },

        '& .about__eventType':{
            order:2
        },

        '& .about__imgsrc':{
            width: "263px",
            height: "148px",
            order:1
        },

        '& .about__time':{
            order:2

        },

        '& .about__pricePerHour':{
            order:2,
            

        },

        '& .about__totalPrice':{
            order:3,
            marginTop: "118px",
            marginLeft: '-100px'
            
        }
    },
    button:{
        width: "80vw",
        height: "118px",
        marginBottom: "30px",
    },
}

export default style