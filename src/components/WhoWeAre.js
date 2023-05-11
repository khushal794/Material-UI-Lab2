import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function WhoWeAre() {
  return (
    <>
      <Box py={3} bgcolor="grey.200">
        <Container maxWidth="md">
          <Typography variant="h6" align="center" gutterBottom>
            Who We Are
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>    
                    Our Story
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Error nostrum, earum ex quasi recusandae eaque asperiores
                    suscipit illum rem voluptate eius sunt labore, dicta
                    pariatur quibusdam modi! Soluta, iste minima.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>    
                    Our Philosophy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Error nostrum, earum ex quasi recusandae eaque asperiores
                    suscipit illum rem voluptate eius sunt labore, dicta
                    pariatur quibusdam modi! Soluta, iste minima.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default WhoWeAre;