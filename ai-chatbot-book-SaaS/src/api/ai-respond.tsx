import { getRespondFromMistral } from "../assets/ai/ai";
import type { ChatMessage } from "../interface/common-data";

export const getApiRespond = async (messages: ChatMessage[]): Promise<string> => {
    // Get the last user message
    const lastUserMessage = messages
      .filter(msg => msg.role === "user")
      .pop()?.content || "";
  
    try {
      // Pass the question to AI model for processing
      const feedback = await getRespondFromMistral(lastUserMessage);
      return feedback;
    } catch (error) {
      console.error("Error getting AI response:", error);
      return "Sorry, I encountered an error. Please try again.";
    }
  };
