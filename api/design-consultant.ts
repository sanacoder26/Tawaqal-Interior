import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
    }

    const { prompt, roomType, materialPreference, budgetRange } = req.body || {};
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

    res.status(200).json({
      result: response.text,
      success: true
    });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message || "Failed to generate design advice." });
  }
}
