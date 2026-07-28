import React, { useState } from 'react';
import { X, Plus, Trash2, RotateCw, Sparkles, Layers, Maximize2, Move } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { MoodboardItem, Product } from '../types';

interface DesignToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  moodboardItems: MoodboardItem[];
  setMoodboardItems: React.Dispatch<React.SetStateAction<MoodboardItem[]>>;
  onOpenConsultation: () => void;
}

export const DesignToolModal: React.FC<DesignToolModalProps> = ({
  isOpen,
  onClose,
  moodboardItems,
  setMoodboardItems,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'canvas' | 'ai-consultant'>('canvas');
  const [floorStyle, setFloorStyle] = useState<'oak' | 'travertine' | 'concrete' | 'rug'>('oak');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // AI Consultant state
  const [aiPrompt, setAiPrompt] = useState('');
  const [roomType, setRoomType] = useState('Living Sanctuary');
  const [materialPref, setMaterialPref] = useState('Boucle, Dark Oak, Travertine Stone');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const addItemToCanvas = (product: Product) => {
    const newItem: MoodboardItem = {
      id: `${product.id}-${Date.now()}`,
      product,
      x: 100 + Math.random() * 150,
      y: 100 + Math.random() * 100,
      scale: 1,
      rotation: 0,
    };
    setMoodboardItems((prev) => [...prev, newItem]);
    setSelectedItemId(newItem.id);
  };

  const removeItem = (id: string) => {
    setMoodboardItems((prev) => prev.filter((item) => item.id !== id));
    if (selectedItemId === id) setSelectedItemId(null);
  };

  const rotateItem = (id: string) => {
    setMoodboardItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, rotation: (item.rotation + 45) % 360 } : item
      )
    );
  };

  const handleAiConsult = async () => {
    setAiLoading(true);
    setAiResult(null);
    try {
      const res = await fetch('/api/design-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: aiPrompt,
          roomType,
          materialPreference: materialPref,
        }),
      });
      const data = await res.json();
      if (data.result) {
        setAiResult(data.result);
      } else {
        setAiResult('Unable to retrieve AI curation at this time. Please try again.');
      }
    } catch (err: any) {
      setAiResult('Error connecting to Ethereal AI Studio Director.');
    } finally {
      setAiLoading(false);
    }
  };

  const floorBackgrounds = {
    oak: 'bg-[#e5e2dc] bg-[radial-gradient(#c9c6c1_1px,transparent_1px)] [background-size:16px_16px]',
    travertine: 'bg-[#efeeeb] bg-[radial-gradient(#747878_1px,transparent_1px)] [background-size:24px_24px]',
    concrete: 'bg-[#e3e2e0]',
    rug: 'bg-[#faf9f6] border-2 border-dashed border-[#c4c7c7]',
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#171818]/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-hidden">
      <div className="bg-[#faf9f6] w-full max-w-6xl h-[92vh] rounded-lg shadow-2xl flex flex-col overflow-hidden relative border border-[#e3e2e0]">
        {/* Header */}
        <div className="p-6 border-b border-[#e3e2e0] flex justify-between items-center bg-[#faf9f6]">
          <div>
            <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] block uppercase font-semibold">
              Interactive Studio
            </span>
            <h2 className="font-display text-2xl font-medium text-[#171818]">
              Spatial Design Tool & AI Curator
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Tab Switches */}
            <div className="bg-[#efeeeb] p-1 rounded-full flex gap-1">
              <button
                onClick={() => setActiveTab('canvas')}
                className={`px-4 py-1.5 text-xs font-label uppercase tracking-wider font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                  activeTab === 'canvas' ? 'bg-[#171818] text-white shadow-sm' : 'text-[#5f5e5a]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" /> 2D Studio Canvas
              </button>
              <button
                onClick={() => setActiveTab('ai-consultant')}
                className={`px-4 py-1.5 text-xs font-label uppercase tracking-wider font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                  activeTab === 'ai-consultant' ? 'bg-[#171818] text-white shadow-sm' : 'text-[#5f5e5a]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> AI Director
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-[#c4c7c7] flex items-center justify-center text-[#171818] hover:bg-[#171818] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: 2D Studio Canvas */}
        {activeTab === 'canvas' && (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
            {/* Left/Main Canvas */}
            <div className="flex-1 flex flex-col bg-[#faf9f6] p-4 relative">
              {/* Controls bar */}
              <div className="mb-3 flex flex-wrap justify-between items-center gap-3 bg-[#f4f3f1] p-3 rounded border border-[#e3e2e0]">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-[#5f5e5a] uppercase">Floor Material:</span>
                  {(['oak', 'travertine', 'concrete', 'rug'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFloorStyle(f)}
                      className={`px-3 py-1 rounded text-[11px] uppercase font-semibold capitalize transition-colors ${
                        floorStyle === f
                          ? 'bg-[#171818] text-white'
                          : 'bg-white text-[#5f5e5a] border border-[#c4c7c7]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-[#5f5e5a] flex items-center gap-2">
                  <span>{moodboardItems.length} Pieces Placed</span>
                  {moodboardItems.length > 0 && (
                    <button
                      onClick={() => setMoodboardItems([])}
                      className="text-red-600 hover:underline text-[11px] uppercase font-semibold"
                    >
                      Clear Canvas
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Studio Canvas */}
              <div
                className={`flex-1 relative rounded border border-[#c4c7c7] overflow-hidden ${floorBackgrounds[floorStyle]}`}
              >
                {moodboardItems.length === 0 ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-[#5f5e5a]">
                    <Move className="w-10 h-10 mb-3 text-[#747878] stroke-[1]" />
                    <p className="font-display text-lg font-medium text-[#171818] mb-1">
                      Your Spatial Canvas is Empty
                    </p>
                    <p className="font-body text-xs max-w-sm font-light">
                      Select furniture pieces from the right panel to compose your bespoke interior environment.
                    </p>
                  </div>
                ) : (
                  moodboardItems.map((item) => {
                    const isSelected = selectedItemId === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        style={{
                          left: `${item.x}px`,
                          top: `${item.y}px`,
                          transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
                        }}
                        className={`absolute cursor-grab active:cursor-grabbing group p-2 rounded transition-shadow ${
                          isSelected
                            ? 'ring-2 ring-[#171818] bg-white/70 backdrop-blur shadow-lg z-20'
                            : 'hover:ring-1 hover:ring-[#747878] z-10'
                        }`}
                      >
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-28 sm:w-36 h-28 sm:h-36 object-cover rounded shadow"
                        />
                        <div className="text-[10px] font-semibold text-[#171818] mt-1 text-center truncate max-w-[140px] bg-white/80 rounded px-1">
                          {item.product.name}
                        </div>

                        {isSelected && (
                          <div className="absolute -top-3 -right-3 flex gap-1 z-30">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                rotateItem(item.id);
                              }}
                              className="w-6 h-6 rounded-full bg-[#171818] text-white flex items-center justify-center shadow"
                              title="Rotate 45°"
                            >
                              <RotateCw className="w-3 h-3" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeItem(item.id);
                              }}
                              className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow"
                              title="Remove"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right Drawer: Catalog selector */}
            <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-[#e3e2e0] bg-[#f4f3f1] p-4 overflow-y-auto flex flex-col">
              <h3 className="font-display text-base font-semibold text-[#171818] mb-3 uppercase tracking-wider">
                Select Furniture
              </h3>
              <p className="font-body text-xs text-[#5f5e5a] mb-4 font-light">
                Click any piece below to add it directly to your room studio canvas.
              </p>

              <div className="space-y-3 flex-1">
                {PRODUCTS.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => addItemToCanvas(prod)}
                    className="p-3 bg-[#faf9f6] border border-[#e3e2e0] rounded flex items-center gap-3 cursor-pointer hover:border-[#171818] transition-all group"
                  >
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#171818] truncate group-hover:text-[#5f5e5a]">
                        {prod.name}
                      </p>
                      <p className="text-[10px] text-[#8d9687] font-semibold uppercase">{prod.room}</p>
                      <p className="text-xs font-bold text-[#171818]">${prod.price.toLocaleString()}</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#efeeeb] text-[#171818] flex items-center justify-center group-hover:bg-[#171818] group-hover:text-white transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#e3e2e0]">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#171818] text-white py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#2c2c2c] transition-colors"
                >
                  Book White Glove Review
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Curation Director */}
        {activeTab === 'ai-consultant' && (
          <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#faf9f6]">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] uppercase font-semibold block mb-2">
                  Powered by Gemini AI Studio Engine
                </span>
                <h3 className="font-display text-3xl font-medium text-[#171818] mb-3">
                  Architectural Curation Assistant
                </h3>
                <p className="font-body text-sm text-[#5f5e5a] font-light max-w-xl mx-auto">
                  Describe your architectural space, ceiling height, lighting direction, or tactile desires to receive bespoke curation notes from our AI Lead Director.
                </p>
              </div>

              <div className="bg-[#f4f3f1] p-6 rounded-lg border border-[#e3e2e0] space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-2">
                      Target Room Environment
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-[#c4c7c7] text-xs py-2.5 px-3 rounded text-[#171818] focus:outline-none"
                    >
                      <option value="Living Sanctuary">Living Sanctuary</option>
                      <option value="Dining Hall & Ritual Room">Dining Hall & Ritual Room</option>
                      <option value="Bedroom Master Suite">Bedroom Master Suite</option>
                      <option value="Architectural Atrium & Lounge">Architectural Atrium & Lounge</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-2">
                      Preferred Tactile Materials
                    </label>
                    <input
                      type="text"
                      value={materialPref}
                      onChange={(e) => setMaterialPref(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-[#c4c7c7] text-xs py-2.5 px-3 rounded text-[#171818] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-2">
                    Spatial Notes & Lighting Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g. High ceiling room with floor-to-ceiling windows overlooking misty woods. Need warm minimalism with an emerald curved sofa and soft ambient floor lamps."
                    className="w-full bg-[#faf9f6] border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none font-body"
                  />
                </div>

                <button
                  onClick={handleAiConsult}
                  disabled={aiLoading}
                  className="w-full bg-[#171818] text-white py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-[#dce5d4]" />
                  {aiLoading ? 'Generating Curation Analysis...' : 'Generate Architectural Advice'}
                </button>
              </div>

              {/* AI Output Result */}
              {aiResult && (
                <div className="bg-[#faf9f6] border border-[#171818] p-8 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e3e2e0]">
                    <Sparkles className="w-5 h-5 text-[#8d9687]" />
                    <h4 className="font-display text-xl font-medium text-[#171818]">
                      Ethereal Director Curation Advice
                    </h4>
                  </div>
                  <div className="font-body text-sm text-[#171818] leading-relaxed whitespace-pre-line">
                    {aiResult}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e3e2e0] flex justify-end">
                    <button
                      onClick={onOpenConsultation}
                      className="bg-[#171818] text-white text-xs px-6 py-2.5 font-semibold uppercase tracking-wider"
                    >
                      Book Human Consultation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
