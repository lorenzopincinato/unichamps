export const matchTypeToText = (matchType: 'FINAL' | 'SEMI' | 'QUARTER') => {
  const translation = {
    FINAL: 'Final',
    SEMI: 'Semifinal',
    QUARTER: 'Quarta de Final',
  };

  return translation[matchType];
};
