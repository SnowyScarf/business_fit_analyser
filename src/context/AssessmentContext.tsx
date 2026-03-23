'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type AssessmentState = {
  stage: 1 | 2;
  answers: Record<string, string>;
  isCompleted: boolean;
};

type AssessmentContextType = {
  state: AssessmentState;
  updateAnswer: (key: string, value: string) => void;
  setStage: (stage: 1 | 2) => void;
  completeAssessment: () => void;
  reset: () => void;
};

const defaultState: AssessmentState = {
  stage: 1,
  answers: {},
  isCompleted: false,
};

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AssessmentState>(defaultState);

  const updateAnswer = (key: string, value: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [key]: value },
    }));
  };

  const setStage = (stage: 1 | 2) => {
    setState((prev) => ({ ...prev, stage }));
  };

  const completeAssessment = () => {
    setState((prev) => ({ ...prev, isCompleted: true }));
  };

  const reset = () => {
    setState(defaultState);
  };

  return (
    <AssessmentContext.Provider value={{ state, updateAnswer, setStage, completeAssessment, reset }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}
