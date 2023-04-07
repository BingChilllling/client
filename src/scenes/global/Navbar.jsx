import {useDispatch, useSelector} from 'react-redux';
import {Badge, Box, IconButton, Typography} from "@mui/material";
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import  {useNavigate} from "react-router-dom";
import { setIsCartOpen } from "../../state";
import logo from "../global/southside-logos.JPEG";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);

    return (
        <Box
            display ="flex"
            alignItems ="center"
            width = "100%"
            height ="50px"
            backgroundColor ="rgba(39, 24, 1, 1)"
            color = "white"
            position = "fixed"
            top="0"
            left="0"
            zIndex="1"
        >
            <Box 
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box
                    onClick={() => navigate("/")}
                    sx={{ "&:hover": {cursor: "pointer"} }}
                    color="white"
                    display="flex"
                    flex-direction="row"
                >
                    <img 
                        src={logo} 
                        alt="My logo"
                        style={{ display:"flex", width: '3%', height: 'auto', borderRadius: '50%' }}
                    />
                    <Typography
                        variant="h3"
                        color="rgba(247, 191, 80, 1)"
                        fontFamily="Sriracha"
                        fontSize="regular"
                        ml="15px"
                        marginTop="6px"
                        justifyContent="space-between"
                    > 
                        Southside Kicks
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    columnGap="20px"
                    zIndex="2"
                >
                    <IconButton sx={{color: "white"}}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton sx={{color: "white"}}>
                        <PersonOutline />
                    </IconButton>

                    <Badge
                        badgeContent = {cart.length}
                        color="secondary"
                        invisible={cart.length === 0}
                        sx={{
                            "& .MuiBadge-badge": {
                                right:5,
                                top:5,
                                padding:"0.4px",
                                height:"14px",
                                minWidth:"13px",
                            },
                        }}
                    >
                        <IconButton 
                            onClick = {() => dispatch(setIsCartOpen({}))}
                            sx={{color: "white"}}
                        >
                            <ShoppingBagOutlined />
                        </IconButton>
                    </Badge>
                    <IconButton sx={{color: "white"}}>
                        <MenuOutlined />
                    </IconButton>

                </Box>
            </Box>
        </Box>
    );
};
export default Navbar;
