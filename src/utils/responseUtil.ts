interface IResponse<T> {
  data: T | null;
  error?: IMessage | null;
  success?: IMessage | null;
}

interface IMessage {
  message: string;
}

export function responseUtil<T>(
  data: T,
  error: IMessage,
  success: IMessage,
): IResponse<T> {
  return {
    data,
    error,
    success,
  };
}
