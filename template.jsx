// Starter Code Template: Street Food Raw Material Optimizer Website

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StreetFoodOptimizer() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const addIngredient = () => {
    const newIngredient = { name, quantity: parseFloat(quantity), cost: parseFloat(cost) };
    setIngredients([...ingredients, newIngredient]);
    setName("");
    setQuantity("");
    setCost("");
  };

  const analyzeIngredients = () => {
    const analyzed = ingredients.map((item) => {
      const avgCost = item.name.toLowerCase().includes("potato") ? 25 : 30; // mock average cost
      const suggestion = item.cost > avgCost ? `Try sourcing at ₹${avgCost}/kg` : "Optimal";
      return { ...item, suggestion };
    });
    setSuggestions(analyzed);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Street Food Raw Material Optimizer</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input className="border rounded px-2 py-1" placeholder="Ingredient Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border rounded px-2 py-1" placeholder="Quantity (kg)" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input className="border rounded px-2 py-1" placeholder="Cost per kg (₹)" type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
      </div>

      <Button onClick={addIngredient}>Add Ingredient</Button>
      <Button onClick={analyzeIngredients} variant="outline">Analyze</Button>

      <div className="space-y-4">
        {suggestions.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p><strong>{item.name}</strong></p>
              <p>Quantity: {item.quantity} kg</p>
              <p>Cost: ₹{item.cost}/kg</p>
              <p className="text-green-600">Suggestion: {item.suggestion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
