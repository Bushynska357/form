export interface PatientQuestions{
  title:string,
  type:string,
  formControlName:string,
  childItems?:CheckQuestion[]
}

export interface CheckQuestion{
  parentAnswer?: string,
  title: string,
  type: string,
  formControlName:string,
  options?: string[] | undefined,
  childItems?: CheckQuestion[]
}

export interface Model{
  patientQuestions:PatientQuestions[]
}
