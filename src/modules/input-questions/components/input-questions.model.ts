export class QuestionModel{
    idStep: number
    description: String
    alternatives: Array<AlternativeQuestionModel>
}

export class AlternativeQuestionModel{
    description: String
    correct: any
}