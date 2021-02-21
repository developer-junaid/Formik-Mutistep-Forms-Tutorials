import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormOne from "../../forms/FormOne";
import FormTwo from "../../forms/FormTwo";
import FormThree from "../../forms/FormThree";

// Custom Styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    minHeight: "60vh",
    padding: "1rem",
    textAlign: "center",
  },

  backButton: {
    marginRight: theme.spacing(1),
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

// Functions

// // getStepLabels - To Get Step Labels
const getStepLabels = () => {
  return ["Form 1 of 3", "Form 2 of 3", "Form 3 of 3"];
};

// // GetStepContent - Decide Which Form to show and gets it's data based on StepIndex
const getStepContent = (stepIndex, handleNext) => {
  switch (stepIndex) {
    case 0:
      return <FormOne handleNext={handleNext} />;

    case 1:
      return <FormTwo handleNext={handleNext} />;

    case 2:
      return <FormThree handleNext={handleNext} />;

    default:
      return "Unknown Steps";
  }
};

// Component
const StepperComponent = () => {
  const classes = useStyles(); // Use Custom Styles Created
  const [activeStep, setActiveStep] = useState(0); // Set Active Step
  const stepLabels = getStepLabels(); // Get Step Labels

  // Handle Next Button
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Handle Reset Button
  const handleReset = () => {
    setActiveStep(0);
  };

  // Return
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepLabels.map((label) => (
          //Return
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {/* If steps are completed or not */}

        {activeStep === stepLabels.length ? (
          <div>
            <Typography className={classes.instructions}>
              All Steps Completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, handleNext)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperComponent;
