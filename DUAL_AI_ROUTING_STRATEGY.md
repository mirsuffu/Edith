# E.D.I.T.H AI Dual-Tier Routing Strategy

This document outlines the design for a dual-tier AI routing system to balance latency, cost, and intelligence.

## 1. Overview
The routing strategy distinguishes between routine queries (Normal Tier) and complex analytical tasks (Thinking Tier).

### Normal Tier (Fast Response)
- **Objective**: Sub-3s latency, low-cost.
- **Model**: 8B–20B parameter model (e.g., Llama-3-8B, Mistral-7B).
- **Cache**: Edge-cached for frequent student queries.
- **Context**: Max 2,048 tokens.
- **Use Cases**: Syllabus lookup, simple progress checks, quick motivational nudges.

### Thinking Tier (Deep Reasoning)
- **Objective**: High intelligence, chain-of-thought (CoT).
- **Model**: Nemotron 120B / Llama-3-70B.
- **Latency**: >20s allowed.
- **Context**: Max 32,000 tokens.
- **Use Cases**: Audit pace analysis, detailed study plan generation, complex psychological reset advice.

## 2. Decision Matrix
The router uses a confidence threshold and user intent classification to decide the tier.

| User Intent | Complexity Score | Confidence Threshold | Tier |
|-------------|------------------|----------------------|------|
| Simple Greeting | Low | N/A | Normal |
| Progress Check | Low | > 0.8 | Normal |
| Study Audit | High | < 0.6 | Thinking |
| Plan Generation | Medium/High | < 0.7 | Thinking |
| Revision Strategy | High | < 0.5 | Thinking |

## 3. Fallback Rules
1. **Thinking Tier Timeout**: If Thinking Tier fails to respond within 20s, degrade to Normal Tier with a "Thinking..." summary cached from previous context.
2. **Context Overflow**: If Normal Tier exceeds 2,048 tokens, automatically upgrade to Thinking Tier or truncate context based on importance.
3. **API Failure**: Graceful degradation to cached responses if both tiers are unavailable.

## 4. A/B Test Plan
### Success Metrics
- **Latency P95**: Target < 3s for Normal, < 30s for Thinking.
- **User Satisfaction (CSAT)**: Measured via thumbs up/down on AI responses.
- **Error Rate**: Target < 1% for routing failures.
- **Token Efficiency**: Monitor cost per session.

### Implementation Phases
1. **Phase 1**: Static routing based on keyword classification.
2. **Phase 2**: Dynamic routing using an LLM-based intent classifier.
3. **Phase 3**: Full deployment with automatic fallback.

---
**Status**: Pending Stakeholder Approval
