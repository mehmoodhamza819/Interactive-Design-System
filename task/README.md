# INBANK INTERNSHIP TASK 
# Project Instructions

## Overview:
This project aims to implement and integrate the backend and frontend components of a decision engine for a fintech loan application. The backend (TICKET-101) focuses on implementing the decision engine logic, while the frontend (TICKET-102) incorporates age-related restrictions into the loan application process.

## Backend (TICKET-101):
### Description:
- Implemented the MVP scope of the decision engine backend.
- Designed a decision engine to determine loan approvals based on personal code, loan amount, and loan period.
- Supported four different scenarios based on personal codes, including debt and different segmentation types.
- Validated loan parameters to ensure that input and output sums, as well as loan periods, meet predefined criteria.

### What Was Done Well:
- Implemented the Decision Engine backend according to the specified requirements.
- Utilized a map-based approach to manage credit modifiers efficiently.
- Ensured that the backend validates loan parameters effectively.

### Areas for Improvement:
- Code readability could be improved by adding comments and adhering to consistent naming conventions.
- Unit tests should be added to verify the correctness of the implemented functionalities.
- Consideration for scalability and extensibility could be enhanced for potential future requirements.

### Conclusion:
The TICKET-101 implementation successfully achieved the MVP scope of the decision engine backend. The code effectively manages credit modifiers and validates loan parameters, providing a foundation for further development and refinement. However, there is room for improvement in terms of code readability, test coverage, and scalability. Overall, the intern demonstrated competence in backend development, but further enhancements are needed to ensure code quality and maintainability.

## Frontend (TICKET-102):
### Description:
- Implemented age-related restrictions to enhance the loan decision-making process in the frontend.
- Integrated age-related validation into the loan application process and provided feedback to the user based on age constraints.

### Approach:
- Utilized Flutter to develop the frontend components.
- Created a Flutter class `AgeRestrictions` to handle age-related validation and feedback.
- Integrated the `AgeRestrictions` class into the Flutter frontend to enforce age-related restrictions during the loan application process.

### Instructions:
1. Ensure that the `AgeRestrictions` class is appropriately integrated into the frontend codebase.
2. Utilize the `isValidAge` method to validate the customer's age before initiating a loan application.
3. Utilize the `provideFeedback` method to display relevant feedback to the customer if their age is not within the acceptable range for loan eligibility.
4. Test the frontend thoroughly to verify that age-related restrictions are enforced effectively during the loan application process.
5. Consider extending the functionality to handle age-related restrictions for different regions or jurisdictions in future iterations.

### Conclusion:
The TICKET-102 implementation successfully integrated age-related restrictions into the frontend of the loan application process. By enforcing age constraints and providing relevant feedback to users, the frontend enhances the decision-making process and ensures compliance with age-related regulations. Further enhancements can be made to extend this functionality for different regions or jurisdictions in future iterations.
