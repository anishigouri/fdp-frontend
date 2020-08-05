interface error {
  hasError: boolean;
  message: string;
}
export interface dataModel {
  required: boolean;
  name: string;
  type: string;
  value: string;
  maxLength: number;
  error: {
    hasError: boolean;
    message: string;
  };
}

export function initialValueAttr(name: string): dataModel {
  return {
    required: false,
    name,
    type: 'text',
    value: '',
    maxLength: 50,
    error: {
      hasError: true,
      message: 'Obrigatório',
    },
  };
}
