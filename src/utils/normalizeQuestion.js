function normalizeQuestion(q) {
  return {
    ...q,
    answers: q.answers.map((a) => ({
      ...a,
      label: a.label ?? a.text,
    })),
  };
}

export default normalizeQuestion;