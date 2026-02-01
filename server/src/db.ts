import { Feature } from "../../shared/types";

const features: Feature[] = [
  {
    id: "dark-mode",
    name: "Dark Mode",
    enabled: true,
    description: "Enables dark theme",
  },
  {
    id: "ai-chat",
    name: "AI Assistant",
    description: "Enables the LLM-powered sidebar chat component.",
    enabled: true,
  },
  {
    id: "beta-billing",
    name: "New Billing Flow",
    description: "Uses the updated Stripe Checkout integration.",
    enabled: false,
  },
];

const db = {
  getAll: () => [...features],
  getById: (id: Feature["id"]) => features.find((feature) => feature.id === id),
  toggle: (id: Feature["id"]): Feature | null => {
    const feature = db.getById(id);

    if (feature) {
      return {
        ...feature,
        enabled: !feature.enabled,
      };
    }

    return null;
  },
};

export const { getAll, getById, toggle } = db;
