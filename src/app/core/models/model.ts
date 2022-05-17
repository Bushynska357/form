export interface PatientQuestions{
  title:string,
  type:string,
  childItems?:CheckQuestion[]
}

export interface CheckQuestion{
  parentAnswer?: string,
  title: string,
  type: string,
  options?: string[],
  childItems?: CheckQuestion[]
}

