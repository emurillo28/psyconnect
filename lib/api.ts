import { config } from './config';
import { Amplify } from 'aws-amplify';
import { signIn, signUp, signOut, currentSession } from '@aws-amplify/auth';

// Configure Amplify
Amplify.configure({
  Auth: {
    region: config.aws.region,
    userPoolId: config.aws.cognito.userPoolId,
    userPoolWebClientId: config.aws.cognito.clientId,
  },
});

export class ApiClient {
  private static async getAuthToken(): Promise<string> {
    try {
      const session = await currentSession();
      return session.getIdToken().getJwtToken();
    } catch (error) {
      console.error('Error getting auth token:', error);
      throw error;
    }
  }

  private static async fetchWithAuth(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const token = await this.getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    };

    return fetch(`${config.api.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });
  }

  // Auth Methods
  static async login(email: string, password: string) {
    return signIn(email, password);
  }

  static async register(email: string, password: string, name: string) {
    return signUp({
      username: email,
      password,
      attributes: {
        name,
        email,
      },
    });
  }

  static async logout() {
    return signOut();
  }

  // User Methods
  static async getUserProfile() {
    const response = await this.fetchWithAuth('/api/v1/users/profile');
    return response.json();
  }

  static async updateUserProfile(data: any) {
    const response = await this.fetchWithAuth('/api/v1/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  // Assessment Methods
  static async getAssessments() {
    const response = await this.fetchWithAuth('/api/v1/assessments');
    return response.json();
  }

  static async createAssessment(data: any) {
    const response = await this.fetchWithAuth('/api/v1/assessments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async getAssessmentResults(assessmentId: string) {
    const response = await this.fetchWithAuth(`/api/v1/assessments/${assessmentId}/results`);
    return response.json();
  }

  // Diary Methods
  static async getDiaryEntries() {
    const response = await this.fetchWithAuth('/api/v1/diary');
    return response.json();
  }

  static async createDiaryEntry(data: any) {
    const response = await this.fetchWithAuth('/api/v1/diary', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  // Appointment Methods
  static async getAppointments() {
    const response = await this.fetchWithAuth('/api/v1/appointments');
    return response.json();
  }

  static async createAppointment(data: any) {
    const response = await this.fetchWithAuth('/api/v1/appointments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  // Avatar Methods
  static async getAvatarState() {
    const response = await this.fetchWithAuth('/api/v1/avatar');
    return response.json();
  }

  static async updateAvatarExpression(expression: string) {
    const response = await this.fetchWithAuth('/api/v1/avatar/expression', {
      method: 'PUT',
      body: JSON.stringify({ expression }),
    });
    return response.json();
  }

  static async unlockAvatarAccessory(accessoryId: string) {
    const response = await this.fetchWithAuth('/api/v1/avatar/accessories/unlock', {
      method: 'POST',
      body: JSON.stringify({ accessoryId }),
    });
    return response.json();
  }

  // Gamification Methods
  static async getGamificationState() {
    const response = await this.fetchWithAuth('/api/v1/gamification');
    return response.json();
  }

  static async claimReward(rewardId: string) {
    const response = await this.fetchWithAuth('/api/v1/gamification/rewards/claim', {
      method: 'POST',
      body: JSON.stringify({ rewardId }),
    });
    return response.json();
  }

  // Notification Methods
  static async getNotifications() {
    const response = await this.fetchWithAuth('/api/v1/notifications');
    return response.json();
  }

  static async updateNotificationPreferences(preferences: any) {
    const response = await this.fetchWithAuth('/api/v1/notifications/preferences', {
      method: 'PUT',
      body: JSON.stringify(preferences),
    });
    return response.json();
  }
} 