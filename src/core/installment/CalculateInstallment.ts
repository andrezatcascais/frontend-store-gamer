import { MAX_INSTALLMENTS, MONTHLY_INTEREST_RATE } from '../constants'; // Import constants for maximum installments and monthly interest rate
import Installment from './Installment'; // Import the Installment interface

export default class CalculateInstallment {
    // Method to execute the installment calculation
    execute(
        amount: number, // Total amount to be financed
        numberOfInstallments: number = MAX_INSTALLMENTS, // Number of installments (default is MAX_INSTALLMENTS)
        interestRate: number = MONTHLY_INTEREST_RATE // Monthly interest rate (default is MONTHLY_INTEREST_RATE)
    ): Installment {
        // Validate the number of installments
        if (numberOfInstallments < 2 || numberOfInstallments > MAX_INSTALLMENTS) {
            throw new Error(`Number of installments must be between 2 and ${MAX_INSTALLMENTS}`); // Throw an error if the validation fails
        }

        // Calculate the total amount with compound interest
        const totalWithInterest = this.calculateCompoundInterest(amount, interestRate, numberOfInstallments);

        // Return the installment details
        return {
            installmentAmount: this.roundToTwoDecimals(totalWithInterest / numberOfInstallments), // Calculate and round the installment amount
            totalAmount: this.roundToTwoDecimals(totalWithInterest), // Round the total amount with interest
            numberOfInstallments, // Include the number of installments
            interestRate, // Include the interest rate
        };
    }

    // Private method to calculate compound interest
    private calculateCompoundInterest(totalAmount: number, monthlyRate: number, numberOfInstallments: number) {
        return totalAmount * Math.pow(1 + monthlyRate, numberOfInstallments); // Calculate total amount with compound interest
    }

    // Private method to round a number to two decimal places
    private roundToTwoDecimals(value: number): number {
        return Math.round(value * 100) / 100; // Round the value to two decimal places
    }
}
