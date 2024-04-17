import 'package:flutter/material.dart';

class AgeRestrictions {
  static const int minAge = 18;
  static const int maxAge = 100; // Arbitrary maximum age for simplicity

  static bool isValidAge(int age) {
    return age >= minAge && age <= maxAge;
  }

  static bool isLoanEligible(int age, int loanPeriod) {
    final int expectedLifetime =
        100; // Assuming an arbitrary value for expected lifetime
    return isValidAge(age) && (expectedLifetime - loanPeriod) >= age;
  }

  static String provideFeedback(int age, int loanPeriod) {
    if (!isValidAge(age)) {
      return "Customer is underage";
    } else if ((expectedLifetime - loanPeriod) < age) {
      return "Customer's age exceeds expected lifetime for loan period";
    } else {
      return "Loan eligibility criteria satisfied";
    }
  }
}

// You would integrate this AgeRestrictions class into your Flutter application as needed.
