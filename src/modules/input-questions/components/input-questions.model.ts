export class QuestionModel{
    idStep: StepModel
    description: String
    alternatives: Array<AlternativeQuestionModel>
}

export class AlternativeQuestionModel{
    description: String
    correct: any
}

export class StepModel{
    id: number
}