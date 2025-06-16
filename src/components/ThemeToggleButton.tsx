"use client";

import { IconButton } from "@mui/material";
import { useThemeStore } from "@/store/useThemeStore";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeToggleButton() {
  const { mode, toggleMode } = useThemeStore();

  return (
    <IconButton
      onClick={toggleMode}
      color="inherit"
      sx={{
        transition: "transform 0.3s ease",
        ":hover": { transform: "rotate(20deg)" },
      }}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
