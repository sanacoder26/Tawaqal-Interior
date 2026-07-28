import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Tawaqal Interior" });
  });

  // Server-side Gemini endpoint for AI Room Curation / Design Consultation
  app.post("/api/design-consultant", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
      }

      const { prompt, roomType, materialPreference, budgetRange } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are the Lead Architectural & Interior Curation Director at TAWAQAL INTERIOR (Karachi). Your brand aesthetic focuses on false ceiling, wall moulding, bespoke woodwork, electrical layout, paint finishing, and tile fixing. Respond in a refined, helpful, and structured format with:
1. Executive Vision (2 concise sentences)
2. Material Palette & Design Suggestions (3 key recommendations)
3. Interior Work & Execution Plan (3 key steps)
4. Lighting & Finish Guidance`;

      const userPrompt = `Client Room Request: ${roomType || "Living Room"}.
Preferences: ${materialPreference || "False Ceiling, Wall Moulding, Wood Work, Paint, Tiles"}.
Budget/Scope: ${budgetRange || "Complete Home Interior Karachi"}.
Specific Notes: ${prompt || "Curate a modern home sanctuary in Karachi."}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userPrompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({
        result: response.text,
        success: true
      });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: error.message || "Failed to generate design advice." });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
