import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import DishItem from "./components/DishItem";
import WhoWeAre from "./components/WhoWeAre";
import StoreTimings from "./components/StoreTimings";
import ReservationForm from "./components/ReservationForm";
import Testimonials from "./components/Testimonials";
import FeedbackForm from "./components/FeedbackForm";
import Footer from "./components/Footer";
import { Container, Grid, Typography } from "@mui/material";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <br />
        <Typography color="green" align="center" variant="h4">
          Best Ordered Dishes of All time at Bits & Bites
        </Typography>
        <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <DishItem
                imageUrl="images\coffee-2446634_1920.jpg"
                dishName="Iced Coffee"
                dishDescription="An iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool. Like a regular coffee, it's usually a combination of hot espresso and milk. However, ice is added too."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DishItem
                imageUrl="images\coffee-2446634_1920.jpg"
                dishName="Italian Pasta"
                dishDescription="An iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool. Like a regular coffee, it's usually a combination of hot espresso and milk. However, ice is added too."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DishItem
                imageUrl="images\coffee-2446634_1920.jpg"
                dishName="OTC Pizza"
                dishDescription="An iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool. Like a regular coffee, it's usually a combination of hot espresso and milk. However, ice is added too."
              />
            </Grid>
          </Grid>
        </Container>

        <br/><br/>
        <WhoWeAre/>
        <br/><br/>
        <StoreTimings/>
        <br/><br/>
        <ReservationForm/>
        <br/><br/>
        <Testimonials/>
        <FeedbackForm/>

       <Footer/>
      </div>
    </>
  );
}

export default App;
