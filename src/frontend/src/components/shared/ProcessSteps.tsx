interface ProcessStepsProps {
  steps: string[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="flex items-start gap-4">
          <span className="step-number">{index + 1}</span>
          <div className="flex-1 pt-1">
            <p className="text-sm font-body text-foreground leading-relaxed">
              {step}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
