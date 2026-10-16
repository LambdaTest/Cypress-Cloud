describe('Test Scenario 1', function() {
    it('Should drag slider to set value to 95 horizontally', function() {
        // Visit the Selenium Playground page
        cy.visit('https://www.lambdatest.com/selenium-playground');
  
        // Click on "Drag & Drop Sliders"
        cy.contains('Drag & Drop Sliders').click();
  
        // Get the slider input element with value '15' and ensure it's visible
        cy.get("input[value='15']").should('be.visible').then((slider) => {
            // Set the initial value of the slider (start position)
            slider.clear().type(0); // Clear any existing value and type the new value

            // Define the target value for the slider
            const targetValue = 95;

            // Calculate the number of steps and the value increment for each step
            const steps = 20; // Increasing steps for smoother movement
            const increment = targetValue / steps;

            // Perform dragging slowly by triggering mousemove events with delays
            let currentValue = 0;
            while (currentValue < targetValue) {
                cy.wait(100); // Adjust the delay as needed (e.g., 100 milliseconds)
                currentValue += increment;
                if (currentValue > targetValue) {
                    currentValue = targetValue; // Ensure currentValue doesn't exceed targetValue
                }
                slider.clear().type(currentValue); // Clear any existing value and type the new value
                cy.log(`Current value of slider: ${currentValue}`);
            }
        });
    });
});
