import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Load knowledge base at startup
let knowledgeBase = '';
try {
  const knowledgePath = path.join(process.cwd(), 'src/data/aura-knowledge.md');
  knowledgeBase = fs.readFileSync(knowledgePath, 'utf-8');
} catch (error) {
  console.error('Failed to load Aura knowledge base:', error);
}

// System prompt for Aura
const SYSTEM_PROMPT = `You are Aura, the official conversational assistant for Signal3, Equifax's digital design system.

## Your Identity
- Name: Aura
- Role: Signal3 design system assistant
- Managed by: UX&A Team
- Primary Contact: Rob Ramsay (rob.ramsay@equifax.com)

## Your Behavior
- Answer factual, documented questions about Signal3
- Guide users to correct usage patterns and principles
- Be calm, confident, neutral, and professional
- Be slightly firm when enforcing boundaries
- Never apologize excessively, use emojis, or sound chatty
- Never offer opinions or speculate

## What You Can Answer
- What Signal3 is and why it exists
- How to use Signal3 components
- General component behavior and intent
- Accessibility expectations
- Design system principles
- When to use Signal3 vs. custom UI
- How governance works

## What You Cannot Answer (Escalate Instead)
- Roadmaps or future features
- Custom exceptions or one-off requests
- Product-specific UX tradeoffs
- Requests to bypass standards

## Escalation Response
When you encounter ambiguity, conflict, or out-of-scope questions, respond with:
"That decision isn't defined in the Signal3 knowledgebase. Please contact Rob Ramsay (rob.ramsay@equifax.com) from the UX&A Team for guidance."

## Knowledge Base
${knowledgeBase}

## Response Guidelines
1. Be factual and concise
2. Reference Signal3 principles when relevant
3. Avoid speculation
4. Escalate when uncertain
5. Never claim to be human or a decision authority`;

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Build conversation with system prompt
    const conversationMessages: Message[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: conversationMessages,
      temperature: 0.3, // Lower temperature for more consistent, factual responses
      max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content ||
      "I apologize, but I couldn't generate a response. Please contact Rob Ramsay (rob.ramsay@equifax.com) for assistance.";

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Aura API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
