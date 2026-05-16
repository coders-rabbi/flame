"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ProductImg01 from "@/assets/image/4.jpeg";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useEffect, useState } from "react";
import ProductDescription from "@/components/ui/productsDescription/productsDescription";
import Ordersummary from "@/components/ui/ordersummary/ordersummary";
import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    product_id: string;
  };
}

interface Product {
  id: number;
  basicInfo: {
    productName: string;
    shortDescription: string;
    longDescription: string;
  };

  pricingInventory: {
    price: number;
    discountPrice: number;
    sku: string;
    stockKeepingUnit: number;
    stockStatus: string;
  };

  variation: {
    size: string[];
    color: string;
    material: string;
  };

  media: {
    mainImage: string;
    galleryImages: string[];
    thumbnailImage: string;
  };

  organization: {
    category: string;
    searchTags: string[];
    brand: string;
  };

  advanceInfo: {
    rating: number;
    reviews: number;
    weight: string;
    dimensions: string;
    warrantyReturnPolicy: string;
  };
}

const ProductDetails = ({ params }: PageProps) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(1);
  const [selectedsize, setSize] = useState<string>();

  console.log(product, params);

  // Fetch Single Product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://al-arafatfoundation-server.vercel.app/products/${params.product_id}`,
        );

        const data = await res.json();

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [params.product_id]);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  // Loading State
  if (!product) {
    return (
      <Container>
        <Typography mt={5}>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={0} mt={5}>
        {/* Product Details */}
        <Grid item xs={12} md={8}>
          <Box>
            <Typography fontSize="1.8rem" fontWeight={600} mb="15px">
              {product?.basicInfo?.productName}
            </Typography>

            <Divider sx={{ mb: "15px", mr: "15px" }} />
          </Box>

          <Grid container gap={2}>
            {/* Product Image */}
            <Grid
              item
              xs={12}
              md={5}
              alignItems="center"
              justifyContent="center"
              height="400px"
              position="relative"
              overflow="hidden"
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  boxShadow: 1,
                }}
              >
                <Image
                  src={ProductImg01}
                  alt={product?.basicInfo?.productName}
                  fill
                  unoptimized
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            {/* Product Info */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" fontWeight={500}>
                  {product?.organization?.brand}
                </Typography>

                <Stack direction="row" alignItems="center" gap={1.5} mt={1}>
                  <Typography variant="h6" fontWeight={600}>
                    BDT {product?.pricingInventory?.discountPrice}৳
                  </Typography>

                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                    }}
                  >
                    BDT {product?.pricingInventory?.price}৳
                  </Typography>
                </Stack>

                <Typography mt={1}>
                  {product?.basicInfo?.shortDescription}
                </Typography>

                {/* Color */}
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Color:{" "}
                  <Box component="span" fontWeight={500} fontSize="1rem">
                    {product?.variation?.color}
                  </Box>
                </Typography>

                {/* Sizes */}
                <Box
                  component="span"
                  fontWeight={500}
                  fontSize="1rem"
                  display="flex"
                  alignItems="center"
                  mt={2}
                  gap={2}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Size:
                  </Typography>

                  <div className="flex gap-4">
                    {product?.variation?.size?.map(
                      (size: string, index: number) => (
                        <button
                          onClick={() => setSize(size)}
                          key={index}
                          className="w-[42px] h-[32px] border text-[15px] font-medium transition-all duration-300"
                        >
                          {size === selectedsize ? (
                            <Typography color="primary">{size}</Typography>
                          ) : (
                            <>{size}</>
                          )}
                        </button>
                      ),
                    )}
                  </div>
                </Box>

                {/* Quantity */}
                <Stack direction="row" gap={1} mt={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Quantity:
                  </Typography>

                  <Stack direction="row" alignItems="center" gap={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleDecrement}
                    >
                      -
                    </Button>

                    <Typography
                      sx={{
                        width: "30px",
                        textAlign: "center",
                      }}
                    >
                      {count}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleIncrement}
                    >
                      +
                    </Button>
                  </Stack>
                </Stack>

                {/* Button */}
                <Box mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    endIcon={<ShoppingBagIcon />}
                  >
                    Save Cart
                  </Button>
                </Box>

                {/* FAQ */}
                <Box mt={3}>
                  <ProductDescription
                    description={product.basicInfo.longDescription}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Order Summary */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            mt: {
              xs: "25px",
              md: "52px",
            },
          }}
        >
          {/* <Box bgcolor="#F5F5F7" borderRadius={3} p={2.5}>
            <Typography variant="h5" fontWeight={700}>
              Order Summary
            </Typography>

            <Divider sx={{ mt: "10px" }} />

            <Box display="flex" justifyContent="space-between" mt={4}>
              <Typography>Sub total</Typography>

              <Typography>
                {product?.pricingInventory?.discountPrice * count}৳
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography fontWeight={600}>VAT</Typography>

              <Typography>50৳</Typography>
            </Box>

            <Divider sx={{ mt: "20px" }} />

            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography fontWeight={600}>Total</Typography>

              <Typography>
                BDT {product?.pricingInventory?.discountPrice * count + 50}৳
              </Typography>
            </Box>
          </Box> */}
          <Ordersummary
            price={product?.pricingInventory?.discountPrice}
            count={count}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: "30px" }}
            onClick={() => {
              router.push(
                `/checkout/shipping_address?productId=${product.id}&price=${product.pricingInventory.discountPrice}&count=${count}`
              );
            }}
          >
            Proceed to CheckOut
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
