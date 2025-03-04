import axios from "axios";
import * as AuthService from "../utils/auth.js";
import type { Event } from "../interfaces/event.js";

//  Ensure correct API URL (Render for production, localhost for development)
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? "https://https://my-team-ep-tester.onrender.com/api/events"
    : "http://localhost:5000/api/events");


    export const fetchEvents = async () => {
      try {
        console.log(`Fetching events from: ${API_URL}/public`); // Debugging log
        const { data } = await axios.get(`${API_URL}/public`, { timeout: 5000 });
    
        // Ensure it's an array before returning
        if (!Array.isArray(data)) {
          console.error("⚠️ fetchEvents(): Expected an array but got:", data);
          return [];
        }
        return data;
      } catch (error) {
        console.error("🚨 Error fetching events:", error);
        return []; //  Return empty array instead of undefined/null
      }
    };


// Create a new event (authenticated)
export const createEvent = async (event: Event) => {
  try {
    const token = AuthService.getToken();
    await axios.post(API_URL, event, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("🚨 Error creating event:", error);
    throw error;
  }
};

// Delete an event (authenticated)
export const deleteEvent = async (id: string) => {
  try {
    const token = AuthService.getToken();
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    console.error("🚨 Error deleting event:", error);
    throw error;
  }
};

// Update an event (authenticated)
export const updateEvent = async (id: string | number, event: Event) => {
  try {
    const token = AuthService.getToken();
    const { data } = await axios.put<Event>(`${API_URL}/${id}`, event, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.error("🚨 Error updating event:", error);
    throw error;
  }
};