export interface RegisterRequest {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    
  }
  
  export interface AuthenticationRequest {
    email: string;
    password: string;
  }
  
  export interface AuthenticationResponse {
    token: string; // Adjust according to the actual response from your backend
    // Other properties if returned in the authentication response
  }