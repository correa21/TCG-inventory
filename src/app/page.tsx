"use client";
import {
  Container,
  Grid,
  Typography,
  Card as MUICard,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useCardStore } from "@/store/useCardStore";
import { Card as TCGCard } from "@/types/card";

export default function HomePage() {
  const { cards, removeCard } = useCardStore();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Card Gallery
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card: TCGCard) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <MUICard>
              <CardMedia
                component="img"
                image={card.imageUrl}
                alt={card.name}
                height="300"
              />
              <CardContent>
                <Typography>{card.name}</Typography>
                <Typography variant="body2">Qty: {card.quantity}</Typography>
                <Typography variant="body2">
                  Condition: {card.condition}
                </Typography>
                <Button onClick={() => removeCard(card.id)}>Remove</Button>
              </CardContent>
            </MUICard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
