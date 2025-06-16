"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { navLinks } from "@/constants/navLinks";

export default function Header() {
  const pathname = usePathname();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TCG Inventory
        </Typography>
        <Box>
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Button
                key={href}
                color="inherit"
                component={Link}
                href={href}
                sx={{
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive ? "2px solid white" : "none",
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
