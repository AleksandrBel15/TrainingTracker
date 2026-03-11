export const sklon = (num: number): string => {
    const lastNum = num % 100;

    if (lastNum >= 11 && lastNum <= 14) return "часов";

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