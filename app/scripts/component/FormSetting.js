import t from 'tcomb-form'

export const Email = t.refinement(t.String, s => (/@/.test(s)))
export const Password = t.refinement(t.String, s => (s.length >= 2))
