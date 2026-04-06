// NVIDIA Nemotron integration for E.D.I.T.H.
export const AI_CONFIG = {
  baseUrl: "https://integrate.api.nvidia.com/v1",
  // In a production app, this should be an environment variable.
  apiKey: "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", 
  modelIds: {
    nano: "nvidia/nemotron-3-nano-30b-a3b",
    super: "nvidia/nemotron-3-super-120b-a12b",
  }
};

export const isAIConfigured = true;
