import { ChatProps } from "../../@types/chat"

export function getChatHistory(): ChatProps[] {

  const storedHistory = localStorage.getItem('chatHistory');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const history: ChatProps[] = storedHistory ? JSON.parse(storedHistory) : [];

  if (!Array.isArray(history)) {
    console.error('Invalid chat history format');
    return [];
  }

  return history;
}