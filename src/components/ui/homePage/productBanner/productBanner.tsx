import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const ProductBanner = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Grid item xs={12} md={6} height={400} bgcolor="primary.light">
          <Typography>This is Women Section</Typography>
        </Grid>
        <Grid item xs={12} md={6} height={400} bgcolor="secondary.light">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} bgcolor="green" height={200}>
              <Typography>This is Men Section</Typography>
            </Grid>
            <Grid item xs={12} md={6} bgcolor="red" height={200}>
              <Typography>This is Men Section</Typography>
            </Grid>
            <Grid item xs={12} md={12} bgcolor="blue" height={200}>
              <Typography>This is Kids Section</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductBanner;
