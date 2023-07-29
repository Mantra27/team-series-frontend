import React,{useEffect, useState} from 'react';
import styled from "styled-components"
import Announcement from '../Components/Announcement';
// import Footer from '../Components/footer';
// import NewsLatter from '../Components/NewsLatter';
import Navbar from "../Components/Navbar"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
// import { useSelector } from 'react-redux';
// import StripeCheckout from "react-stripe-checkout"
// import dailyFlyer from "./images/DAILYFLYER(4).png"
// import { userRequest } from '../requestMethod';
import { useNavigate } from "react-router-dom";





const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
align-items: center;

`
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const TopTitle = styled.h1`
font-weight: 100;
`

const TopButton = styled.button`
padding: 13px;
background-color: ${(props) => props.type === "filled" ? "black" : "white"};
color: ${(props) => props.type === "filled" && "white"};
border: ${(props) => props.type === "filled" && "none"};
font-weight: 600;
cursor: pointer;
`
const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 30px;
`
const Info = styled.div`
flex: 2;

`

const Product = styled.div`

display: flex;
/* justify-content: space-between; */
`
const ProductDetails = styled.div`
flex: 1;
display: flex;

`
const Image = styled.img`
width: 200px;
height: 200px;
padding: 20px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 20px;
margin-left:20px ;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
cursor: pointer;
background-color: ${(props) => props.color};
border-radius: 50%;
border: 2px solid #eee;
`
const ProductSize = styled.span`
`
const Price = styled.div`

flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const AmountContainer = styled.div`
display: flex;
`
const Amount = styled.span`
border: 1px solid teal;
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content:center ;
border-radius: 5px;
`
const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  `
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 90%;
`;

const Summary = styled.div`
flex: 1;
border: 2px solid black;
height: 50vh;
border-radius:20px ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
font-size: ${(props) => props.type === "total" && "30px"};
`
const SummaryItemPrice = styled.span`

`
const SummaryItemText = styled.span`

`
const Button = styled.button`

padding: 10px;
color: white;
background-color: black;
border: none;
`

const Cart = () => {
    // const cart = useSelector(state => state.cart);
    // const [stripeToken,setStripeToken] = useState(null);

    const history = useNavigate();

    // const onToken = (token)=>{
    //     setStripeToken(token);
    // }
    // useEffect(()=>{
    //     const makeRequest = async()=>{
    //         try{
    //             const res = await userRequest.post("/checkout/payment",{
    //                 tokenId:stripeToken.id,
    //                 amount:cart.total,
    
    //             });
    //             history.push("/success",{
    //                stripeData :res.data,
    //                products:cart,
    //            })
               

    //         }catch{}
    //     }
    //    stripeToken && makeRequest()
    // },[stripeToken,cart.total, history])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <TopTitle>Your Cart</TopTitle>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {/* {
                            cart.products.map((product) => (
<> */}
                                <Product>
                                    <ProductDetails>
                                        <Image 
                                        src="data:image/jpeg;base64,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" 
                                        />
                                        <Details>
                                            <ProductName><b>Product Name :</b> Zero to One</ProductName>
                                            {/* <ProductId><b>Product Id:</b></ProductId> */}
                                            {/* <ProductColor color={product.color}></ProductColor> */}
                                            <ProductSize><b>Auther:</b>Khush</ProductSize>
                                            <ProductSize><b>Genre:</b>hqppy</ProductSize>
                                            <ProductPrice><b>Price:</b> ₹200</ProductPrice>
                                        </Details>
                                       
                                    </ProductDetails>

                                </Product>
                                <Hr />

                         
                                {/* </>
                            ))
                        } */}


                    

                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₹200   </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>₹ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>₹ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₹200</SummaryItemPrice>
                        </SummaryItem>
                        {/* <StripeCheckout
              name="HAPPY STORE"
              image={dailyFlyer}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout> */}
                    </Summary>
                </Bottom>
            </Wrapper>
            {/* <NewsLatter />
            <Footer /> */}
        </Container>
    )
}

export default Cart
