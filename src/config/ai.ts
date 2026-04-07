// NVIDIA Nemotron integration for E.D.I.T.H.
export const AI_CONFIG = {
  baseUrl: "https://integrate.api.nvidia.com/v1",
  // Local development keys (Not used in Production GitHub Pages)
  keys: {
    nano: "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",
    super: "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",
  },
  modelIds: {
    nano: "nvidia/nemotron-3-nano-30b-a3b",
    super: "nvidia/nemotron-3-super-120b-a12b",
  }
};

export const isAIConfigured = true;
