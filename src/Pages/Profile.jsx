import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement';
import styled from 'styled-components';
import Bslider from '../Components/Bslider';
import Switch from "react-switch";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Popup from '../Components/Popup';

const Container = styled.div` 
margin-top: 50px;
position: relative;
overflow-x: hidden;
` 
const SButton = styled.div`
position: absolute;
top:20px;
right: 20px;
padding: 10px;
border-radius: 5px;
background-color: #367055 ;
color: white;
cursor: pointer;
user-select: none;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

`


const Top = styled.div`
display: flex;
border-bottom: 1px solid lightgray;
padding: 40px;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`

const Img = styled.img`
height: 200px;
width: 200px;

`

const Username = styled.h1``


const Right = styled.div`
flex: 2;
display: flex;
flex-direction: column;
align-items: center;

justify-content: center;
gap: 20px;
`

const Details = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 20px;
justify-content: center;
`


const Title = styled.h1`
font-weight: 900;
margin-left: 10px;
`

const Name = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Email = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Phone = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Address = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Span = styled.div`
font-weight: 900;
padding:10px
`


const Bottom = styled.div`
display: flex;
padding: 0px 20px 0px 20px;
`

const Bleft = styled.div`
flex: 1;
border-right: 1px solid lightgray;
height: 50vh;
width: 50vw;
padding: 30px;
`

const Bright = styled.div`

flex: 1;
border-right: 1px solid lightgray;
height: 50vh;
width: 50vw;
padding: 30px;
`

const BTitle = styled.h1`
text-align: center;
padding-bottom: 10px;
`

const Add = styled.div`
position: absolute;
top:270px;
right: 80px;
color: Black;
border:1px solid lightgrey;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
gap: 10px;
cursor: pointer;
`


const Profile = () => {


    const [click,setClick] = useState(false);
    const [book,setBook] = useState(false);

  const  handleClick = () => setClick(!click);

  const handleBook = () => setBook(!book);

  return (
    <>
    <Announcement/>
    <Navbar/>

    <Container>

    <Top>
 <Left>
<Img src='https://img.freepik.com/free-icon/user_318-563642.jpg'/>
<Username>
</Username>
 </Left>
 <Right>
 <Details>

 {
    click ?(<> <Title>
      Seller Account
</Title></>):(<>
    <Title>
  My Account
</Title></>)
 }

 <Name>
 <Span>
 Name:
 </Span>
 Khush
 </Name>
 <Email>
 <Span>
 Email:</Span>
 khushpatel2121@gamil.com
 </Email>
 <Phone>
 <Span>
Phone:
</Span>
+91 8160293185
</Phone>
<Address>
<Span>
Address:
</Span>
B-601 Shreeji Heights, Mira Road East, Thane, Maharashtra, 401107
</Address>
</Details>

</Right>
</Top>

{
    click ?(<>
        <Bottom>
<Bleft>
<BTitle>
Book on sale
</BTitle>
<Bslider/>
</Bleft>

<Bright>
<BTitle>
Books Sold 
</BTitle>
<Bslider/>
</Bright>
</Bottom>
        </>):(<>

<Bottom>
<Bleft>
<BTitle>
Books Bought
</BTitle>
<Bslider/>
</Bleft>

<Bright>
<BTitle>
Books rented
</BTitle>
<Bslider/>
</Bright>
</Bottom>
        </>)
}



{
    click ?(<>
        
<SButton onClick={handleClick}>
   Seller Mode
   <Switch onClick={handleClick} checked={click} />
</SButton>
        </>) :(<>
            <SButton onClick={handleClick}>
   Seller Mode
   <Switch onClick={handleClick}  checked={click} />
</SButton>
            </>)
}
{
    click && (<>
         <Add onClick={handleBook}>
         Add Books
         <AddCircleIcon/>
         </Add> 
        </>)
}
{

    book && (<><Popup open={setBook}/></>)
}

</Container>

</>
  )
}

export default Profile
