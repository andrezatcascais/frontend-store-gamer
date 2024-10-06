import { CalculateInstallment } from '@/core';

// Custom hook to calculate installment payments
export default function useInstallmentCalculation(value: number, quantity: number = 12) {
    // Create a new instance of CalcularParcelamento and execute the calculation
    const installment = new CalculateInstallment().execute(value, quantity);
    return installment; // Return the calculated installment
}