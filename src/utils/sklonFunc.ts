export const sklon = (num: number): string => {
    const lastNum = num % 100;

    if (num >= 11 && num <= 14) return "часов";

    switch (lastNum) {
      case 1:
        return "час";
      case 2:
      case 3:
      case 4:
        return "часа";
      default:
        return "часов";
    }
  }