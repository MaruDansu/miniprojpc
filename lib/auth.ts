export const authenticate = (user: any) => {
    if (!user) {
      throw new Error("Not authenticated");
    }
  };
  