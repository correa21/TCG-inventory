"use client";

import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Card as MUICard,
  CardMedia,
  CardContent,
} from "@mui/material";
import { searchCards } from "@/services/scryfallService";
import { useCardStore } from "@/store/useCardStore";
import { fromScryfall } from "@/utils/fromScryfall";
import type { ScryfallCard } from "@/types/scryfall";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ScryfallCard[]>([]);
  const { addCard } = useCardStore();

  const handleSearch = async () => {
    const data = await searchCards(query);
    setResults(data);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Cards
      </Typography>
      <TextField
        label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button onClick={handleSearch} variant="contained">
        Search
      </Button>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {results.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <MUICard>
              <CardMedia
                component="img"
                image={card.image_uris?.normal}
                alt={card.name}
                height="300"
              />
              <CardContent>
                <Typography>{card.name}</Typography>
                <Button onClick={() => addCard(fromScryfall(card))}>Add</Button>
              </CardContent>
            </MUICard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
