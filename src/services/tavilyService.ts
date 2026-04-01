// Tavily Search API configuration for E.D.I.T.H.
export const TAVILY_CONFIG = {
  baseUrl: "https://api.tavily.com",
  // In a production app, this should be an environment variable.
  apiKey: "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", 
};

export interface TavilySearchResponse {
  results: {
    title: string;
    url: string;
    content: string;
    score: number;
  }[];
  answer?: string;
}

/**
 * Executes a search query via Tavily Search API.
 * Uses 'search_depth: basic' for speed and 'include_answer: true' for a clean AI-ready summary.
 */
export const searchWeb = async (query: string): Promise<string> => {
  try {
    const response = await fetch(`${TAVILY_CONFIG.baseUrl}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: TAVILY_CONFIG.apiKey,
        query,
        search_depth: "basic",
        include_answer: true,
        max_results: 3,
      }),
    });

    if (!response.ok) {
      throw new Error(`Tavily API error: ${response.status}`);
    }

    const data: TavilySearchResponse = await response.json();
    
    // Tavily's 'answer' field provides a clean, AI-optimized text response.
    // If not available, we construct a concise summary from the results.
    if (data.answer) {
      return data.answer;
    }

    return data.results
      .map(r => `Source: ${r.title}\nContent: ${r.content}`)
      .join('\n\n');
  } catch (error) {
    console.error('Web search failed:', error);
    return "Search failed. Proceed with internal knowledge.";
  }
};
