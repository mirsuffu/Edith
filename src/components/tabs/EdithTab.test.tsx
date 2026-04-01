import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { EdithTab } from './EdithTab';
import { useAppStore } from '@/store/appStore';

// Mock the store
vi.mock('@/store/appStore', () => ({
  useAppStore: vi.fn(),
}));

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  Send: () => <div data-testid="send-icon" />,
  Plus: () => <div data-testid="plus-icon" />,
  Brain: () => <div data-testid="brain-icon" />,
  Trash2: () => <div data-testid="trash-icon" />,
  MessageSquare: () => <div data-testid="message-icon" />,
  X: () => <div data-testid="x-icon" />,
  Square: () => <div data-testid="square-icon" />,
  Zap: () => <div data-testid="zap-icon" />,
}));

// Mock ReactMarkdown
vi.mock('react-markdown', () => ({
  default: ({ children }: { children: string }) => <div>{children}</div>,
}));

// Mock AI service
vi.mock('@/services/aiService', () => ({
  sendChatMessage: vi.fn(),
  buildSystemPrompt: vi.fn(),
  AIError: class AIError extends Error {
    type: string;
    constructor(message: string, type: string) {
      super(message);
      this.type = type;
    }
  },
}));

describe('EdithTab Focus Stability', () => {
  const mockStore = {
    data: {
      edithChatSessions: [
        { id: '1', title: 'Test Session', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), messages: [] }
      ],
      activeEdithSessionId: '1',
      edithMemory: '',
      isThinkingEnabled: false,
      isWebSearchEnabled: false,
    },
    userProfile: { name: 'Test User' },
    addChatSession: vi.fn(),
    addChatMessage: vi.fn(),
    setActiveEdithSessionId: vi.fn(),
    deleteChatSession: vi.fn(),
    setEdithMemory: vi.fn(),
    setPendingToolCall: vi.fn(),
    setThinkingEnabled: vi.fn(),
    setWebSearchEnabled: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useAppStore as any).mockImplementation((selector: any) => selector(mockStore));
    (useAppStore as any).getState = () => mockStore;
  });

  it('maintains focus during rapid typing (>= 60 cpm)', async () => {
    const user = userEvent.setup();
    render(<EdithTab />);

    const textarea = screen.getByPlaceholderText(/Ask Edith anything/i) as HTMLTextAreaElement;
    
    // Ensure initial focus
    textarea.focus();
    expect(document.activeElement).toBe(textarea);

    const textToType = 'This is a long sentence to simulate rapid typing and ensure focus remains uninterrupted.';
    const typingIntervalMs = 1000 / (60 / 60); // 1 character per second is 60 cpm, but we want faster

    // Simulate rapid typing
    for (const char of textToType) {
      await user.type(textarea, char);
      
      // Check if focus is still on textarea
      // The focus-lock mechanism should kick in if focus is lost
      await waitFor(() => {
        expect(document.activeElement).toBe(textarea);
      }, { timeout: 100 });
    }

    expect(textarea.value).toBe(textToType);
  });

  it('re-focuses textarea if blur occurs while typing', async () => {
    render(<EdithTab />);
    const textarea = screen.getByPlaceholderText(/Ask Edith anything/i) as HTMLTextAreaElement;

    // Start typing
    fireEvent.change(textarea, { target: { value: 'a' } });
    
    // Manually blur
    textarea.blur();
    expect(document.activeElement).not.toBe(textarea);

    // The focus-lock mechanism should re-focus within 50ms (interval)
    await waitFor(() => {
      expect(document.activeElement).toBe(textarea);
    }, { timeout: 200 });
  });
});
