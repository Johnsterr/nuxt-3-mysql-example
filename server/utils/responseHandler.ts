export const handleSuccess = (data: any) => {
  return {success: true, data};
};

export const handleError = (error: unknown) => {
  return {success: false, message: (error as Error).message};
};
