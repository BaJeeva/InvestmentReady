import React from 'react';
import { SimpleAssessmentWizard } from '@/components/assessment/SimpleAssessmentWizard';
import { AuthGuard } from '@/components/auth/AuthGuard';

const Assessment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8">
      <AuthGuard requireAuth>
        <SimpleAssessmentWizard />
      </AuthGuard>
    </div>
  );
};

export default Assessment;