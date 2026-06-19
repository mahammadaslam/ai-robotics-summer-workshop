export interface IWorkshopDetail {
  id: string;
  label: string;
  value: string;
  desc: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface ILearningOutcome {
  id: string;
  title: string;
  desc: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
  };
  iconName: string;
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface IEnquiryInput {
  name: string;
  email: string;
  phone: string;
}

export interface IEnquiryResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
  };
  error?: string;
}
