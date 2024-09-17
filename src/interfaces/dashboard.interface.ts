export interface DataType {
  key: React.Key;
  name: string;
  description: string;
  address: string;
}

export interface User {
  profile_picture: string;
  name: string;
  gender: string;
  age: number;
}

export interface UserProfileData extends User {
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  lab_results: string[]; 
  diagnosis_history?: any[]; 
  diagnostic_list?: any[]; 
}

export interface Diagnostic {
  name: string;
  description: string;
  status: string;
}


export interface BloodPressure {
  systolic: {
    value: number;
    levels?: string;
  };
  diastolic: {
    value: number;
    levels?: string;
  };
}

export interface DiagnosisHistoryEntry {
  month: string;
  year: string;
  blood_pressure: BloodPressure;
}

interface UserInfo {
  diagnosis_history: DiagnosisHistoryEntry[];
}

export interface DiagnosticChartProps {
  userInfo: UserInfo[];
}